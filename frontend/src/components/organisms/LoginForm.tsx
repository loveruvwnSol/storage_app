"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "../atoms/Link";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signin } = useAuth();
  return (
    <>
      <div className="mb-8">
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          メールアドレス
        </label>
        <div className="mt-2">
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
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
          <div className="text-sm">
            <Link linkText="パスワードを忘れた方" href="/signin" />
          </div>
        </div>
        <div className="mt-2">
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Button
          label="Sign in"
          onClick={(e) => {
            if (!email || !password) {
              alert("すべての項目を入力してください");
              return;
            }
            e.preventDefault();
            signin(email, password);
          }}
        />
      </div>
    </>
  );
};
