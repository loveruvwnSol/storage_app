<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\LoginRequest;
use App\Repositories\User\Interface\UserRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    private UserRepositoryInterface $userRepo;

    public function __construct(
        UserRepositoryInterface $userRepo,
    ) {
        $this->userRepo = $userRepo;
    }

    public function create(CreateUserRequest $request): JsonResponse
    {
        return DB::transaction(function () use ($request) {

            $this->userRepo->create(
                $request->validated('name'),
                $request->validated('email'),
                $request->validated('password'),
            );

            return response()->json(['message' => 'Create new user successful']);
        });
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $user = $this->userRepo->findOneByAuth($request->validated('email'), $request->validated('password'));

        $token = $this->userRepo->login($user);

        return response()->json(["message" => "login successful", "token" => $token]);
    }

    public function logout(): JsonResponse
    {
        $this->userRepo->logout();

        return response()->json(["message" => "logout successful"]);
    }
}
