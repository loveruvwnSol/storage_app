import { csrfCookie } from "@/api/csrfCookie";
import { API_ROUTE, apiAxios } from "@/consts/api";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      await csrfCookie();
      const response = await apiAxios.get(API_ROUTE.GET_USER.PATH);
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      router.push("/signin");
    }
  };

  return { user };
};
