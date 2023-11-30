import { create } from "zustand";

export const fetchStore = create((set) => ({
  name: "fetch Data",
  data: [],
  updateFetch: (newName) => set((state) => ({ name: newName })),
  fetchData: async () => {
    const response = await fetch("https://jsonplaceholder.org/posts", {
      method: "GET",
    });
    const fetch = await response.json();
    set({ data: fetch });
    // set((state) => ({ data: fetch }));
  },
}));
