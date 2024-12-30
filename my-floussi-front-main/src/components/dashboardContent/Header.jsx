import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "../../utils/dashUtils/classNames.js";
import { useAuth } from "../../context/AuthContext.jsx";
import userIcon from "../../assets/imgs/icons8-user.svg";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ setSidebarOpen }) => {
  const { user, logout } = useAuth();

  const userNavigation = [
    {
      name: "Settings & Profile",
      to: `/${user.id}/settings`,
    },
    {
      name: "Sign out",
      onClick: logout
    },
  ];

  return (
      <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex flex-1 justify-between px-4">
          <div className="flex flex-1 items-center">
            <p className="font-medium">
              Bonjour <span className="italic underline">{user.name}</span>,
              bienvenue à nouveau
            </p>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={userIcon} alt="" />
                </Menu.Button>
              </div>
              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                            <Link
                                to={item.to}
                                onClick={item.onClick}
                                className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                )}
                            >
                              {item.name}
                            </Link>
                        )}
                      </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
  );
};

export default Header;