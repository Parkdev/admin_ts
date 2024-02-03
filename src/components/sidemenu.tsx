import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// 네비 state
import { RootState } from "../store/navstate";
import { useSelector } from "react-redux";

// const menuItems: Array<{ id: number; name: string }> = [
//   { id: 1, name: "Home" },
//   { id: 2, name: "About" },
//   { id: 3, name: "Contact" },
// ];

export default function SideMenu() {
  const navigation = useSelector((state: RootState) => {
    return state.nav.navigation;
  });
  return (
    <div className="h-[calc(100vh-64px)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gray-100">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span>Menu Dropdown</span>
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
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white"
                  } rounded-md px-3 py-2 text-sm font-medium`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span>Do you offer technical support?</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              No.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
