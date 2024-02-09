import { configureStore, createSlice } from "@reduxjs/toolkit";

// category: 1 대분류 2 이외
const nav = createSlice({
  name: "nav",
  initialState: {
    navigation: [
      {
        category: 1,
        name: "대시보드",
        href: "/dashboard",
        current: true,
        icon: null,
      },
      { category: 1, name: "Menu2", href: "#", current: false, icon: null },
      { category: 1, name: "Menu3", href: "#", current: false, icon: null },
      { category: 1, name: "Menu4", href: "#", current: false, icon: null },
      {
        category: 2,
        name: "Menu5",
        href: "#",
        current: false,
        icon: "Calendar",
      },
      {
        category: 2,
        name: "Menu6",
        href: "#",
        current: false,
        icon: "BookmarkSlash",
      },
      {
        category: 2,
        name: "Menu7",
        href: "#",
        current: false,
        icon: "Briefcase",
      },
      {
        category: 2,
        name: "Menu8", // 알람 데이터
        href: "#",
        current: false,
        icon: "BuildingLibrary",
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
// sidebar 상태
const isHidden = createSlice({
  name: "isHidden",
  initialState: {
    state: false,
  },
  reducers: {
    toggleHidden: (state) => {
      state.state = !state.state;
    },
  },
});

// notificationn
const notifications = createSlice({
  name: "notifications",
  initialState: {
    list: [
      {
        category: "알림 종류1",
        message: "새로운 기능이 추가되었습니다.",
        href: "##",
        icon: "Bell",
        seen: false,
      },
      {
        category: "알림 종류2",
        message: "메인 페이지가 생성되었습니다.",
        href: "##",
        icon: "Question",
        seen: false,
      },
      {
        category: "알림 종류3",
        message: "새로운 메뉴가 추가되었습니다.",
        href: "##",
        icon: "Exclamation",
        seen: false,
      },
    ],
  },
  reducers: {
    haveSeen(state, action) {
      state.list[action.payload].seen = true;
    },
    checkSeen(state) {
      state.list.forEach((noti) => {
        if (noti.seen === true) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
});

const navStore = configureStore({
  reducer: {
    nav: nav.reducer,
    isHidden: isHidden.reducer,
    notifications: notifications.reducer,
  },
});

export let { changeCurrent } = nav.actions;
export let { toggleHidden } = isHidden.actions;
export let { haveSeen } = notifications.actions;
export type RootState = ReturnType<typeof navStore.getState>;
export default navStore;
