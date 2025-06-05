import { Link } from "../atoms/Link";
import { Logo } from "../atoms/Logo";
import { LoginForm } from "../organisms/LoginForm";

export const Signin = () => {
  return (
    <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo size="10" />
        <h1 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
          ログイン
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
        <div className="mt-10 text-center text-sm/6">
          <Link
            description="アカウントをお持ちでない方は"
            linkText="こちらから"
            href="/signup"
          />
        </div>
      </div>
    </div>
  );
};
