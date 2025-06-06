<?php

namespace App\Http\Requests\Media;

use App\Http\Requests\BaseRequest;

class UploadMediaRequest extends BaseRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "file" => ["required", "file", "mimes:jpg,jpeg,png,mp4", "max:10240"]
        ];
    }
}
