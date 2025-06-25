<?php

namespace App\Repositories\Media;

use App\Models\Media;
use App\Repositories\Media\Exception\FailedDeleteMediaException;
use App\Repositories\Media\Exception\FailedGetMediaException;
use App\Repositories\Media\Exception\FailedUploadMediaException;
use App\Repositories\Media\Exception\FailedUploadMediaForMinIOException;
use App\Repositories\Media\Interface\MediaRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

class MediaRepository implements MediaRepositoryInterface
{
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

    public function deleteMedia(int $id): void
    {
        $userID = auth()->id();

        $media = Media::where("id", $id)->where("user_id", $userID)->first();

        if (!$media) {
            throw new FailedGetMediaException();
        }

        $filePath = "/{$userID}/{$media->media_name}";

        $deleteFromStorage =  Storage::disk('s3')->delete($filePath);

        if (!$deleteFromStorage) {
            throw new FailedDeleteMediaException();
        }

        $deleteFromDB = $media->delete();

        if (!$deleteFromDB) {
            throw new FailedDeleteMediaException();
        }
    }
}
