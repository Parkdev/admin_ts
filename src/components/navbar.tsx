import React, { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react";
import logo from "../img/Microsoft_logo.png";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
// 상단 네비 state
import { RootState } from "../store/navstate";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrent, toggleHidden, haveSeen } from "../store/navstate";

// 프로필 옵션
const profileOptions: Array<{ name: string; href: string }> = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

//아이콘 맵핑
const icons: { [key: string]: React.ReactElement } = {
  Bell: <BellIcon />,
  Question: <QuestionMarkCircleIcon />,
  Exclamation: <ExclamationCircleIcon />,
};

export default function Navbar() {
  const navigation = useSelector((state: RootState) => {
    return state.nav.navigation;
  });

  const notifications = useSelector((state: RootState) => {
    return state.notifications.list;
  });

  //noficification 숫자
  const [alerm, setAlerm] = useState(0);

  useEffect(() => {
    setAlerm(notifications.filter((item) => !item.seen).length);
  }, [notifications]);

  let dispatch = useDispatch();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          {/* x축 자동, 최대너비 1280px max-w-7xl 패딩x 2(8px) sm: 640px 사이즈 에서 24px , lg(1024px) 에서는 32px */}
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            {/* position 설정 flex 설정 hight 16단위 (64px) 중앙정렬 양쪽정렬 */}
            <div className="relative flex h-16 items-center justify-between">
              {/* 절대위치, y축여백, 0, 왼쪽여백 0, flex 중앙정렬, sm: 640 이상 사이즈에서 숨김*/}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* 모바일 전용 메뉴 버튼*/}
                {/* position 설정, inline-flex(container의 흐름대로 쌓임), 모서리, padding, text색, hover시 bg색 text색변경, focus시 outline없앰,  */}
                <Disclosure.Button
                  onClick={() => dispatch(toggleHidden())}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  {/* 안쪽 여백 - 0.5 */}
                  <span className="absolute -inset-0.5" />
                  {/* 스크린 리더용 */}
                  <span className="sr-only">Open main menu</span>
                  {/* 열렸을때 x, 닫혔을때 메뉴아이콘 */}
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Navbar 앞 */}
              {/* flex flex 110, sm이상 item을 늘림 수직으로 표현, sm이상 시작 정렬 */}
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                {/* 아이콘 - flex 아이템 축소 방지 */}
                <a href="#" className="flex flex-shrink-0 items-center">
                  <img
                    className="m-2 h-6 w-auto text-white"
                    src={logo}
                    alt="Microsoft"
                  />
                </a>

                {/* 기본적으로 숨기기, sm이상 노출*/}
                <div className="hidden lg:ml-6 lg:block">
                  {/* x축 간격 4 */}
                  <div className="flex space-x-4">
                    {navigation
                      .filter((item) => item.category === 1)
                      .map((item, index) => (
                        <a
                          key={"topnav-" + item.name}
                          href={item.href}
                          className={`${
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          } rounded-md px-3 py-2 text-sm font-medium`}
                          onClick={() => dispatch(changeCurrent(index))}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
              {/* Nav 우측 */}
              <div className="bg-gray-800 absolute inset-y-0 right-0 flex space-x-4 items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                {/* 알람 */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`${open ? "text-white" : ""} relative rounded-md bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none`}
                      >
                        {/* 알람 개수 */}
                        {alerm > 0 && (
                          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 flex item-center justify-center text-sm text-white hidden sm:block">
                            <p className="block">{alerm}</p>
                          </div>
                        )}

                        <BellIcon
                          className="h-6 w- hidden sm:block"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute right-1 translate-x-1/2 z-10 mt-5 w-screen max-w-sm px-4 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative bg-white">
                              {notifications.map((item, index) => (
                                <a
                                  key={item.category}
                                  href={item.href}
                                  className={` ${item.seen ? "hover:bg-gray-200" : "bg-blue-100 hover:bg-blue-200"} flex items-center p-3 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50 transition duration-500 ease-in-out`}
                                  onClick={() => dispatch(haveSeen(index))}
                                >
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    {item.icon ? (
                                      React.cloneElement(icons[item.icon], {
                                        className: "text-gray-500 h-6 w-6",
                                      })
                                    ) : (
                                      <BellIcon className="h-6 w-6" />
                                    )}
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                      {item.category}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      {item.message}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* 프로필 */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex items-center space-x-3 rounded-sm bg-gray-800 text-sm focus:outline-none">
                      <div className="hidden sm:block">
                        <p className=" text-white inset-0 text-right font-bold">
                          홍길동
                        </p>
                        <p className="text-white">hong@gmail.com</p>
                      </div>
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  {/* 메뉴 효과 */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileOptions.map((item) => (
                        <Menu.Item key={"profile-" + item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={`${active ? "bg-gray-200" : ""} block px-4 py-2 text-sm text-gray-700`}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
