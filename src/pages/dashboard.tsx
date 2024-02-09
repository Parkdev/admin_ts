import React from "react";
import { DeviceTabletIcon } from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/dashboardstate";
import formatDate from "../functions/formatDate";
import DeviceTable from "../components/deviceTable";

const Dashboard: React.FC = () => {
  const conditionInfo = useSelector(
    (state: RootState) => state.conditionList.status,
  );
  const tabInfo = useSelector((state: RootState) => state.tabList);
  const deviceInfo = useSelector((state: RootState) => state.deviceList);
  const deviceDetail = useSelector((state: RootState) => state.deviceDetail);

  return (
    <div className="w-full p-10 flex flex-col">
      {/* 제목 */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-700">Welcome to your dashboard</p>
      </div>
      {/* 상단>Status */}
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {conditionInfo.map((status) => {
            return (
              <div
                key={status.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="h-40 p-4">
                  <h5 className="text-lg font-semibold text-gray-900">
                    {status.name}
                  </h5>
                  <p
                    className={`${status.errorcomment ? "text-red-500" : "text-gray-500"} mt-1 text-sm text-gray-500"`}
                  >
                    {status.errorcomment
                      ? `${status.errorcomment} 개의 문제 발생중`
                      : "이상 없음"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* 중단>디바이스 영역 */}
        <div className="col-span-1 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          {/* 디바이스 영역> 활성화 디바이스 */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="text-xl font-bold leading-none text-gray-900">
                활성화 디바이스 목록
              </h5>
              <p className="mt-1 text-sm text-gray-500">
                마지막 업데이트 날짜 : {deviceInfo.updateDate}
              </p>
            </div>
            <a
              href="/"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              자세히 보기 {">"}
            </a>
          </div>

          <div className="flow-root">
            <ul className="divide-y divide-gray-200">
              {deviceInfo.devices.map((device) => {
                return (
                  <li key={device.id} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <DeviceTabletIcon className="h-5 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {device.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {device.subdata}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {device.amount}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 디바이스 영역> 디바이스 상세 */}
        <div className="col-span-1 lg:col-span-3 w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="text-xl font-bold leading-none text-gray-900">
                디바이스 상세
              </h5>
              <p className="mt-1 text-sm text-gray-500">
                마지막 업데이트 날짜 : {deviceDetail.updateDate}
              </p>
            </div>
            <a
              href="/"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              자세히 보기 {">"}
            </a>
          </div>
          <div className="flow-root">
            <DeviceTable></DeviceTable>
          </div>
        </div>
      </div>

      {/* 하단>tab영역 */}
      <div className="mt-5">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-t-xl bg-gray-800 pt-1 px-1">
            {Object.keys(tabInfo).map((tabInfo) => (
              <Tab
                key={tabInfo}
                className={({ selected }) =>
                  `${
                    selected
                      ? "bg-white text-gray-800"
                      : "text-gray-300 hover:bg-white/[0.12] hover:text-white"
                  } w-full rounded-t-xl h-9 text-sm font-medium focus:outline-none`
                }
              >
                {tabInfo}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="rounded-b-xl pb-1 px-1 bg-gray-800 h-[calc(100%-2.5rem)]">
            {Object.values(tabInfo).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-b-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{formatDate(post.date)}</li>
                        <li>&middot;</li>
                        <li>댓글 {post.commentCount}</li>
                        <li>&middot;</li>
                        <li>공유 {post.shareCount}</li>
                      </ul>

                      <a
                        href="#"
                        className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Dashboard;
