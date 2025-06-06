<?php

namespace App\Repositories\Media;

use App\Models\Media;
use App\Repositories\Media\Exception\FailedGetMediaException;
use App\Repositories\Media\Exception\FailedUploadMediaException;
use App\Repositories\Media\Exception\FailedUploadMediaForMinIOException;
use App\Repositories\Media\Interface\MediaRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

class MediaRepository implements MediaRepositoryInterface
{

    /**
     * @throws FailedUploadMediaException
     *
     * @return void
     */
    public function upload($file): Media
    {
        $userID = auth()->id();
        $fileName = $file->getClientOriginalName();
        $filePath = "/{$userID}";
        $fileType = $file->getClientMimeType();

        /** @var \Illuminate\Filesystem\FilesystemAdapter $disk */
        $disk = Storage::disk('s3');
        $result = $disk->putFileAs($filePath, $file, $fileName);

        if (!$result) {
            throw new FailedUploadMediaForMinIOException();
        }

        $exists = Media::where("user_id", $userID)->where("media_url", env("AWS_URL") . "/media{$filePath}/{$fileName}")->exists();;

        if ($exists) {
            throw new FailedUploadMediaException();
        }

        $media =  Media::create([
            "user_id"    => $userID,
            "media_name" => $fileName,
            "media_url"  => env("AWS_URL") . "/media{$filePath}/{$fileName}",
            "media_type" => $fileType,
        ]);

        return $media;
    }

    public function getMedia(): Collection
    {
        $userID = auth()->id();

        $media = Media::where("user_id", $userID)->get();

        if (!$media) {
            throw new FailedGetMediaException();
        }

        return $media;
    }
}
