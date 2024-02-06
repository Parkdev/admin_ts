import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  CalendarIcon,
  BookmarkSlashIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";

// category: 1 대분류 2 이외
const nav = createSlice({
  name: "nav",
  initialState: {
    navigation: [
      { category: 1, name: "Menu1", href: "#", current: true, icon: null },
      { category: 1, name: "Menu2", href: "#", current: false, icon: null },
      { category: 1, name: "Menu3", href: "#", current: false, icon: null },
      { category: 1, name: "Menu4", href: "#", current: false, icon: null },
      {
        category: 2,
        name: "Menu5",
        href: "#",
        current: false,
        icon: "CalendarIcon",
      },
      {
        category: 2,
        name: "Menu6",
        href: "#",
        current: false,
        icon: "BookmarkSlashIcon",
      },
      {
        category: 2,
        name: "Menu7",
        href: "#",
        current: false,
        icon: "BriefcaseIcon",
      },
      {
        category: 2,
        name: "Menu8",
        href: "#",
        current: false,
        icon: "BuildingLibraryIcon",
      },
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

const isHidden = createSlice({
  name: "isHidden",
  initialState: {
    state: false,
  },
  reducers: {
    toggleHidden: (state) => {
      state.state = !state.state;
      console.log(state.state);
    },
  },
});

const store = configureStore({
  reducer: {
    nav: nav.reducer,
    isHidden: isHidden.reducer,
  },
});

export let { changeCurrent } = nav.actions;
export let { toggleHidden } = isHidden.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;
