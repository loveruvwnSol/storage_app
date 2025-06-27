import { Link } from "../atoms/Link";
import { Logo } from "../atoms/Logo";
import { RegisterForm } from "../organisms/RegisterForm";

export const Signup = () => {
  return (
    <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <Logo size={100} />
        </div>
        <h1 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
          アカウント作成
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />
        <div className="mt-10 text-center text-sm/6 text-indigo-300">
          <Link
            description="アカウントをお持ちの方は"
            linkText="こちらから"
            href="/signin"
          />
        </div>
      </div>
    </div>
  );
};
