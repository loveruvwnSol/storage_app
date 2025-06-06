import axios from "axios";

type ApiRoute = {
  PATH: string;
  METHOD: string;
};

export const API_ROUTE: { [name: string]: ApiRoute } = {
  CSRF_COOKIE: {
    PATH: "/sanctum/csrf-cookie",
    METHOD: "GET",
  },
  SIGNIN: {
    PATH: "/api/signin",
    METHOD: "POST",
  },
  SIGNUP: {
    PATH: "/api/signup",
    METHOD: "POST",
  },
  SIGNOUT: {
    PATH: "/api/signout",
    METHOD: "POST",
  },
  GET_USER: {
    PATH: "/api/user",
    METHOD: "GET",
  },
  GET_MEDIA: {
    PATH: "/api/media",
    METHOD: "GET",
  },
  UPLOAD_MEDIA: {
    PATH: "/api/media",
    METHOD: "POST",
  },
} as const;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const apiAxios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  withXSRFToken: true,
});
