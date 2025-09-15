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

  loginUser: (email: string, password: string) => Promise<boolean>;

  // Update this to return a result object instead of void
  registerUser: (
    email: string,
    username: string,
    password: string
  ) => Promise<
    | { success: true; user: User; token: string }
    | { success: false; error: string }
  >;

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

      return true;
    } catch (err: any) {
      set({ error: err.response?.data?.error || err.message, loading: false });
      return false;
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

      return { success: true, user: res.data.user, token: res.data.token }; // ✅ Return success
    } catch (err: any) {
      const message = err.response?.data?.error || err.message;
      set({ error: message, loading: false });
      return { success: false, error: message }; // ✅ Return error
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
