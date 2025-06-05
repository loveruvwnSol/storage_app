<?php

namespace App\Repositories\User\Exception;

use App\Exceptions\HttpExceptionInterface;
use RuntimeException;

class FailedLogoutException extends RuntimeException implements HttpExceptionInterface
{
    public function getStatusCode(): int
    {
        return 500;
    }

    public function getResponseJson(): array
    {
        return ["message" => "Failed to logout"];
    }
}
