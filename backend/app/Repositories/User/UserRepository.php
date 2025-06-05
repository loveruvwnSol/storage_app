<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\User\Exception\FailedCreateUserException;
use App\Repositories\User\Exception\FailedFindUserException;
use App\Repositories\User\Exception\FailedLoginException;
use App\Repositories\User\Exception\FailedLogoutException;
use App\Repositories\User\Interface\UserRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use Throwable;

class UserRepository implements UserRepositoryInterface
{
    public function create(string $name, string $email, string $password): User
    {
        try {
            return  User::create([
                "name" => $name,
                "email" => $email,
                "password" => bcrypt($password),
            ]);
        } catch (Throwable $e) {
            logs()->error($e);
            throw new FailedCreateUserException();
        }
    }

    public function findOneByAuth(string $email, string $password): User
    {
        if (!Auth::attempt(["email" => $email, "password" => $password])) {
            throw new FailedFindUserException();
        }

        $user = User::whereEmail($email)->first();

        if (!$user) {
            throw new FailedFindUserException();
        }

        return $user;
    }

    public function login(User $user): string
    {
        try {
            $user->tokens()->delete();
            $token = $user->createToken("login:user{$user->id}")->plainTextToken;
        } catch (Throwable $e) {
            throw new FailedLoginException();
        }

        return $token;
    }

    public function logout(): void
    {
        try {
            session()->flush();
        } catch (Throwable $e) {
            throw new FailedLogoutException();
        }
    }
}
