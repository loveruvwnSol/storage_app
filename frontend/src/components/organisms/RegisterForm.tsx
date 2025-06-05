"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { useAuth } from "@/hooks/useAuth";

export const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signup } = useAuth();
  return (
    <>
      <div className="mb-8">
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-gray-900"
        >
          ユーザーネーム
        </label>
        <div className="mt-2">
          <Input onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          メールアドレス
        </label>
        <div className="mt-2">
          <Input onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="mt-8 mb-8">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            パスワード
          </label>
        </div>
        <div className="mt-2">
          <Input onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div>
        <Button
          label="Sign up"
          onClick={(e) => {
            if (!name || !email || !password) {
              alert("すべての項目を入力してください");
              return;
            }
            e.preventDefault();
            signup(name, email, password);
          }}
        />
      </div>
    </>
  );
};
