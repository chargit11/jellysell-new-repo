import { create } from "zustand";
import axios from "axios";

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  loginUser: (email: string, password: string) => Promise<void>;

  registerUser: (
    email: string,
    username: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  loginUser: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      set({ user: res.data.user, token: res.data.token, loading: false });
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("authUser", JSON.stringify(res.data.user));
    } catch (err: any) {
      set({ error: err.response?.data?.error || err.message, loading: false });
    }
  },

  registerUser: async (email, username, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post("/api/auth/register", {
        email,
        username,
        password,
      });
      set({ user: res.data.user, token: res.data.token, loading: false });
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("authUser", JSON.stringify(res.data.user));
    } catch (err: any) {
      set({ error: err.response?.data?.error || err.message, loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
