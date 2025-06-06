<?php

namespace App\Repositories\Media\Exception;

use App\Exceptions\HttpExceptionInterface;
use RuntimeException;

class FailedUploadMediaException extends RuntimeException implements HttpExceptionInterface
{
    public function getStatusCode(): int
    {
        return 500;
    }

    public function getResponseJson(): array
    {
        return ["message" => "Failed to upload media"];
    }
}
