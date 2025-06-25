<?php

namespace App\Repositories\Media\Interface;

use App\Models\Media;
use Illuminate\Support\Collection;

interface MediaRepositoryInterface
{
    public function upload($file): Media;

    public function getMedia(): Collection;

    public function deleteMedia(int $id): void;
}
