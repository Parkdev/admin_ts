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
    최근: [
      {
        id: 1,
        title: "테스트 1",
        date: "2024-02-08 16:00:00",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "테스트 2",
        date: "2024-02-08 15:00:00",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "테스트 7",
        date: "2024-02-08 14:00:00",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "테스트 8",
        date: "2024-02-08 13:00:00",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 5,
        title: "테스트 8",
        date: "2024-02-08 13:00:00",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    몇일전: [
      {
        id: 1,
        title: "테스트 3",
        date: "2024-02-07 18:00:00",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "테스트 4",
        date: "2024-02-06 17:00:00",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    몇달전: [
      {
        id: 1,
        title: "테스트 5",
        date: "2024-01-08 12:00:00",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "테스트 6",
        date: "2023-12-08 12:00:00",
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

const deviceDetail = createSlice({
  name: "deviceDetail",
  initialState: {
    updateDate: "2021년 10월 10일",
    devices: [
      {
        id: 1,
        category: "Windows",
        name: "Microsoft Surface Pro1",
        date: "2024-02-09 12:00:00",
        status: true,
      },
      {
        id: 2,
        category: "Linux",
        name: "HP",
        date: "2024-02-09 12:00:00",
        status: true,
      },
      {
        id: 3,
        category: "Windows",
        name: "Microsoft Surface Pro2",
        date: "2024-02-09 12:00:00",
        status: true,
      },
      {
        id: 4,
        category: "iOS/iPadOS",
        name: "iPhone 14 X",
        date: "2024-02-09 12:00:00",
        status: true,
      },
      {
        id: 5,
        category: "macOS",
        name: "Apple MacBook Pro 17",
        date: "2024-02-09 12:00:00",
        status: false,
      },
      {
        id: 6,
        category: "Windows Mobile",
        name: "Windows Phone 7",
        date: "2024-02-09 12:00:00",
        status: false,
      },
    ],
  },
  reducers: {},
});

const dashBoardStore = configureStore({
  reducer: {
    conditionList: conditionList.reducer,
    tabList: tabList.reducer,
    deviceList: deviceList.reducer,
    deviceDetail: deviceDetail.reducer,
  },
});

export default dashBoardStore;
export type RootState = ReturnType<typeof dashBoardStore.getState>;
