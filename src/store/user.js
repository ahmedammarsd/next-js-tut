import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    name: "ahmed ammar",
  },
  counter: 0,
  //   updateUser: (newUser) =>
  //     set((state) => ({
  //       user: { ...state.user, ...newUser },
  //     })),
  updateUser: (newUser) =>
    set((state) => ({
      user: { ...state.user, ...newUser },
    })),
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));
// const userStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))
