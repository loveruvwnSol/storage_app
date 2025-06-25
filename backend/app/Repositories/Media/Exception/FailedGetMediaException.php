<?php

namespace App\Repositories\Media\Exception;

use App\Exceptions\HttpExceptionInterface;
use RuntimeException;

class FailedGetMediaException extends RuntimeException implements HttpExceptionInterface
{
    public function getStatusCode(): int
    {
        return 404;
    }

    public function getResponseJson(): array
    {
        return ["message" => "Failed to get media"];
    }
}
