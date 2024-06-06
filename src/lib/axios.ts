import { IUserResponse } from "@/components/form/signUp";
import axios from "axios";

export const privateInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const publicInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;

}

privateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("session") as string;
    const session: Session = JSON.parse(token);
    if (token) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      privateInstance.defaults.headers.common["Authorization"] =
        "Bearer " + access_token;
      return privateInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);
const refreshAccessToken = async () => {
  try {
    const tokens = localStorage.getString("session");
    if (tokens) {
      const token: Session = JSON.parse(tokens);

      const keys = await privateInstance.get<IUserResponse>("auth/refresh_token", {
        headers: { Authorization: `Bearer ${token.refresh_token}` },
      });
      localStorage.set("session", JSON.stringify(keys.data.session));
      return keys.data.session.access_token;
    }
  } catch (err) {
    console.log(err);
  }
};