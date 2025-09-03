import { create } from "zustand";

export const useStoreUser = create((set, get) => ({
  userData: [],
  getUsers: () => {
    console.log("fetching users...");
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => set({ userData: data }))
      .catch((error) => console.log(error));
  },
}));
