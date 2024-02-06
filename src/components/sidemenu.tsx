import React, { useState, useEffect, Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  CalendarIcon,
  BookmarkSlashIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";

// Redux state
import { RootState } from "../store/navstate";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrent } from "../store/navstate";

export default function SideMenu() {
  //Redux state
  const navigation = useSelector((state: RootState) => {
    return state.nav.navigation;
  });
  const isHidden = useSelector((state: RootState) => {
    return state.isHidden.state;
  });

  let dispatch = useDispatch();

  //아이콘 맵핑
  const icons: { [key: string]: React.ReactElement } = {
    CalendarIcon: <CalendarIcon className="h-5 w-5" />,
    BookmarkSlashIcon: <BookmarkSlashIcon className="h-5 w-5" />,
    BriefcaseIcon: <BriefcaseIcon className="h-5 w-5" />,
    BuildingLibraryIcon: <BuildingLibraryIcon className="h-5 w-5" />,
  };

  //Dropdown Status 상태 관리
  let [ddStatus, setDdStatus] = useState(false);
  useEffect(() => {
    setDdStatus(
      navigation
        .filter((item) => item.category === 1)
        .some((item) => item.current)
        ? true
        : false,
    );
  }, [navigation]);

  useEffect(() => {
    console.log(ddStatus);
  }, [ddStatus]);

  //메뉴 검색
  type NavigationItem = {
    category: number;
    name: string;
    href: string;
    current: boolean;
    icon: null | string;
  };

  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState<NavigationItem[]>([]);

  useEffect(() => {
    const result: NavigationItem[] = navigation.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    console.log(result);
    setSearched(result);
  }, [searchValue]);

  return (
    <div
      className={`${
        isHidden ? "block" : "hidden sm:block"
      } h-[calc(100vh-64px)] w-full sm:max-w-[20rem] shadow-xl shadow-blue-gray-900/5 bg-gray-800`}
    >
      <div className="text-gray-100 text-xl">
        <a href="/" className="p-2.5 flex items-center">
          <i className="p-2">
            <HomeIcon className="h-5 w-5" />
          </i>
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">Home</h1>
        </a>
        <div className="mx-2 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="text-sm">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </i>
          <input
            type="text"
            placeholder="Menu Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      {false ? (
        <></>
      ) : (
        <>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  onClick={() => setDdStatus(!ddStatus)}
                  className="flex w-full justify-between px-4 py-4 text-left text-sm font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                >
                  <div className="flex">
                    <ChartBarIcon className="h-5 w-5" />
                    <span className="ml-2">Dropdown Menu</span>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      ddStatus ? "rotate-180 transform" : ""
                    } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                {ddStatus && (
                  <div className="px-4 text-sm text-gray-500 flex flex-col">
                    {navigation
                      .filter((item) => item.category === 1)
                      .map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`${
                            item.current
                              ? "bg-gray-900 text-gray-100"
                              : "text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                          } px-3 py-2 text-sm font-medium`}
                          onClick={() => dispatch(changeCurrent(index))}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
                )}
                {/* 일반 버튼 메뉴 */}
                <div className="my-2 bg-gray-600 h-[1px]" />
                {navigation
                  .filter((item) => item.category === 2)
                  .map((item, index) => {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${
                          item.current
                            ? "bg-gray-900 text-gray-100"
                            : "text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                        } flex space-x-3 px-4 py-4 text-sm text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
                        onClick={() => dispatch(changeCurrent(index + 4))}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <>{item.icon ? icons[item.icon] : null}</>
                        <div>{item.name}</div>
                      </a>
                    );
                  })}
                {/* 검색 결과 */}
              </>
            )}
          </Disclosure>
        </>
      )}
    </div>
  );
}
