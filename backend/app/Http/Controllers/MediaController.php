<?php

namespace App\Http\Controllers;

use App\Http\Requests\Media\UploadMediaRequest;
use App\Repositories\Media\Interface\MediaRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class MediaController extends Controller
{

    private MediaRepositoryInterface $mediaRepo;

    public function __construct(
        MediaRepositoryInterface $mediaRepo
    ) {
        $this->mediaRepo = $mediaRepo;
    }
    public function upload(UploadMediaRequest $request): JsonResponse
    {
        return DB::transaction(function () use ($request) {

            $media = $this->mediaRepo->upload(
                $request->file("file")
            );

            return response()->json(["message" => "upload your media successful", "media" => $media]);
        });
    }

    public function getMedia(): JsonResponse
    {
        $media = $this->mediaRepo->getMedia();

        return response()->json([
            "message" => "get your media successful",
            "media"   => $media,
        ]);
    }

    public function deleteMedia($id): JsonResponse
    {

        $this->mediaRepo->deleteMedia($id);

        return response()->json(["message" => "delete your media successful"]);
    }
}
