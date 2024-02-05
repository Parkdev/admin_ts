import { configureStore, createSlice } from "@reduxjs/toolkit";

const nav = createSlice({
  name: "nav",
  initialState: {
    navigation: [
      { name: "Menu1", href: "#", current: true },
      { name: "Menu2", href: "#", current: false },
      { name: "Menu3", href: "#", current: false },
      { name: "Menu4", href: "#", current: false },
    ],
  },
  reducers: {
    changeCurrent: (state, action) => {
      state.navigation.forEach((nav) => {
        nav.current = false;
      });
      state.navigation[action.payload].current = true;
    },
  },
});

const store = configureStore({
  reducer: {
    nav: nav.reducer,
  },
});

export let { changeCurrent } = nav.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;
