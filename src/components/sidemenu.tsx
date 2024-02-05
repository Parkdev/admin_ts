import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  ChartBarIcon,
  CalendarIcon,
  BookmarkSlashIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

// 네비 state
import { RootState } from "../store/navstate";
import { useSelector } from "react-redux";

export default function SideMenu() {
  const navigation = useSelector((state: RootState) => {
    return state.nav.navigation;
  });
  return (
    <div className="h-[calc(100vh-64px)] max-w-[20rem] shadow-xl shadow-blue-gray-900/5 bg-gray-800 hidden sm:block">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 flex items-center">
          <i className="p-2 rounded-md bg-purple-800">
            <HomeIcon className="h-5 w-5" />
          </i>
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">Home</h1>
        </div>
        <div className="mx-2 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="text-sm">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between px-4 py-4 text-left text-sm font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <div className="flex">
                <ChartBarIcon className="h-5 w-5" />
                <span className="ml-2">Dropdown Menu</span>
              </div>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.current
                      ? "bg-gray-900 text-gray-100"
                      : "text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  } rounded-md px-3 py-2 text-sm font-medium`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </Disclosure.Panel>
            {/* 일반 버튼 메뉴 */}
          </>
        )}
      </Disclosure>
      <div className="my-2 bg-gray-600 h-[1px]"></div>
      <div className="flex w-full justify-between px-4 py-4 text-left text-sm font-medeum text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
        <div className="flex">
          <CalendarIcon className="h-5 w-5" />
          <span className="ml-2">Menu 1</span>
        </div>
      </div>
      <div className="flex w-full justify-between px-4 py-4 text-left text-sm font-medeum text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
        <div className="flex">
          <BookmarkSlashIcon className="h-5 w-5" />
          <span className="ml-2">Menu 2</span>
        </div>
      </div>
      <div className="flex w-full justify-between px-4 py-4 text-left text-sm font-medeum text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
        <div className="flex">
          <BriefcaseIcon className="h-5 w-5" />
          <span className="ml-2">Menu 3</span>
        </div>
      </div>
      <div className="flex w-full justify-between px-4 py-4 text-left text-sm font-medeum text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
        <div className="flex">
          <BuildingLibraryIcon className="h-5 w-5" />
          <span className="ml-2">Menu 4</span>
        </div>
      </div>
    </div>
  );
}
