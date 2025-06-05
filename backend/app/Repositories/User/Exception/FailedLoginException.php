<?php

namespace App\Repositories\User\Exception;

use App\Exceptions\HttpExceptionInterface;
use RuntimeException;

class FailedLoginException extends RuntimeException implements HttpExceptionInterface
{
    public function getStatusCode(): int
    {
        return 401;
    }

    public function getResponseJson(): array
    {
        return ["message" => "Failed to login"];
    }
}
