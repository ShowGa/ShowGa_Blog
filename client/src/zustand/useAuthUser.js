import { create } from "zustand";

const useAuthUserStore = create((set) => ({
  authUser: JSON.parse(localStorage.getItem("auth-user")) || false,
  setAuthUser: (authUser) => set({ authUser }),
}));

export default useAuthUserStore;
