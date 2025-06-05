import { csrfCookie } from "@/api/csrfCookie";
import { API_ROUTE, apiAxios } from "@/consts/api";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  const signin = async (email: string, password: string) => {
    try {
      await csrfCookie();
      const response = await apiAxios.post(API_ROUTE.SIGNIN.PATH, {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("ログインに失敗しました。");
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await apiAxios.post(API_ROUTE.SIGNUP.PATH, {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        alert("アカウントを作成しました。");
        router.push("/signin");
      }
    } catch (error) {
      alert("アカウントの作成に失敗しました");
    }
  };

  const signout = async () => {
    try {
      const response = await apiAxios.post(API_ROUTE.SIGNOUT.PATH);
      if (response.status === 200) {
        router.push("/signin");
      }
    } catch (error) {
      alert("ログアウトに失敗しました。");
    }
  };

  return { signin, signup, signout };
};
