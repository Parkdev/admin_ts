import { configureStore, createSlice } from "@reduxjs/toolkit";

const conditionList = createSlice({
  name: "conditionList",
  initialState: {
    updateDate: "2021년 10월 10일",
    status: [
      { id: 1, name: "디바이스 등록", errorcomment: "" },
      { id: 2, name: "디바이스 구성", errorcomment: "" },
      { id: 3, name: "클라이언트 앱", errorcomment: "" },
      { id: 4, name: "디바이스 준수", errorcomment: "2" },
    ],
  },
  reducers: {},
});

const tabList = createSlice({
  name: "tabList",
  initialState: {
    Recent: [
      {
        id: 1,
        title: "테스트 1",
        date: "5시간 전",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "테스트 2",
        date: "2시간 전",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "테스트 3",
        date: "7일 전",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "테스트 4",
        date: "6일 전",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "테스트 5",
        date: "2시간 전",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "테스트 6",
        date: "4시간 전",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  reducers: {},
});

const deviceList = createSlice({
  name: "deviceList",
  initialState: {
    updateDate: "2021년 10월 10일",
    devices: [
      { id: 1, name: "Windows", subdata: "", amount: 320 },
      { id: 2, name: "Linux", subdata: "", amount: 3467 },
      { id: 3, name: "Andriod", subdata: "", amount: 67 },
      { id: 4, name: "iOS/iPadOS", subdata: "", amount: 320 },
      { id: 5, name: "macOS", subdata: "", amount: 320 },
      { id: 6, name: "Windows Mobile", subdata: "", amount: 0 },
    ],
  },
  reducers: {},
});

const dashBoardStore = configureStore({
  reducer: {
    conditionList: conditionList.reducer,
    tabList: tabList.reducer,
    deviceList: deviceList.reducer,
  },
});

export default dashBoardStore;
export type RootState = ReturnType<typeof dashBoardStore.getState>;
