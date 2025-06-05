import { API_ROUTE, apiAxios } from "@/consts/api";

export const csrfCookie = async () => {
  return await apiAxios.get(API_ROUTE.CSRF_COOKIE.PATH);
};
