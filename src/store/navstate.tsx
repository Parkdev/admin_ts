import { configureStore, createSlice } from "@reduxjs/toolkit";

const nav = createSlice({
  name: "nav",
  initialState: {
    navigation: [
      { name: "Dashboard", href: "#", current: true },
      { name: "Menu2", href: "#", current: false },
      { name: "Menu3", href: "#", current: false },
      { name: "Menu4", href: "#", current: false },
    ],
  },
  reducers: {},
});

const store = configureStore({
  reducer: {
    nav: nav.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
