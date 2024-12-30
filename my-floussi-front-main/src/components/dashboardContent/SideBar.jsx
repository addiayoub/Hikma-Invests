// Sidebar.jsx
import { Fragment } from "react";
import hikmaLogo from "../../assets/imgs/logo/logo-v2.svg";
import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/dashUtils/classNames.js";
import PencilSquareIcon from "@heroicons/react/24/outline/esm/PencilSquareIcon.js";
import CheckCircleIcon from "@heroicons/react/24/outline/esm/CheckCircleIcon.js";
import RectangleStackIcon from "@heroicons/react/24/outline/esm/RectangleStackIcon.js";
import RectangleGroupIcon from "@heroicons/react/24/outline/esm/RectangleGroupIcon.js";
import UserCircleIcon from "@heroicons/react/24/outline/esm/UserCircleIcon.js";
import WalletIcon from "@heroicons/react/24/outline/esm/WalletIcon.js";
import Cog6ToothIcon from "@heroicons/react/24/outline/esm/Cog6ToothIcon.js";
import Logout from "@heroicons/react/24/outline/esm/ArrowLeftEndOnRectangleIcon.js";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarOpen, setSidebarOpen, userRole }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout, user } = useAuth();
  const adminNavigation = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: HomeIcon,
      current: currentPath === "/dashboard",
    },
    {
      name: "Admins",
      to: "/admins",
      icon: CheckCircleIcon,
      current: currentPath === "/admins",
    },
    {
      name: "Users",
      to: "/users",
      icon: UserIcon,
      current: currentPath === "/users",
    },
    {
      name: "Google Users",
      to: "/google-users",
      icon: UserCircleIcon,
        current: currentPath === "/google-users",
    },
    {
      name: "Questionnaires",
      to: "/questionnaires",
      icon: RectangleStackIcon,
      current: currentPath === "/questionnaires",
    },
    {
      name: "Blog",
      to: "/blog",
      icon: PencilSquareIcon,
      current: currentPath === "/blog",
    },
    {
      name: "Settings & Profile",
      to: `/${user.id}/settings`,
      icon: Cog6ToothIcon,
      current: currentPath === `/${user.id}/settings`,
    },
    { name: "Logout", icon: Logout, current: false, onClick: logout },
  ];

  const userNavigation = [
    {
      name: "Mes Questionnaires",
      to: `/${user.id}/questionnaires`,
      icon: RectangleStackIcon,
      current: currentPath === `/${user.id}/questionnaires`,
    },
    {
      name: "Questionnaire",
      to: `/${user.id}/questionnaire`,
      icon: RectangleGroupIcon,
      current: currentPath === `/${user.id}/questionnaire`,
    },
    {
      name: "Tarifs",
      to: `/${user.id}/tarif`,
      icon: WalletIcon,
      current: currentPath === `/${user.id}/tarifs`,
    },
    {
      name: "Settings & Profile",
      to: `/${user.id}/settings`,
      icon: Cog6ToothIcon,
      current: currentPath === `/${user.id}/settings`,
    },
    { name: "Logout", icon: Logout, current: false, onClick: logout },
  ];
  const navigation = userRole === "admin" ? adminNavigation : userNavigation;
  return (
      <>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
              as="div"
              className="relative z-40 md:hidden"
              onClose={setSidebarOpen}
          >
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img className="h-12 w-12" src={hikmaLogo} alt="Hikma Invest" />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => {
                        if (item.name === "Logout") {
                          return (
                              <div
                                  key={item.name}
                                  onClick={logout}
                                  className={classNames(
                                      "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                      "group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer"
                                  )}
                              >
                                <item.icon
                                    className={classNames(
                                        "text-gray-400 group-hover:text-gray-500",
                                        "mr-4 flex-shrink-0 h-6 w-6"
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                              </div>
                          );
                        } else {
                          return (
                              <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                      item.current
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                      "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                              >
                                <item.icon
                                    className={classNames(
                                        item.current
                                            ? "text-gray-500"
                                            : "text-gray-400 group-hover:text-gray-500",
                                        "mr-4 flex-shrink-0 h-6 w-6"
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                          );
                        }
                      })}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <img className="h-8 w-auto" src={hikmaLogo} alt="Hikma Invest" />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {navigation.map((item) => {
                  if (item.name === "Logout") {
                    return (
                        <div
                            key={item.name}
                            onClick={logout}
                            className={classNames(
                                "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                            )}
                        >
                          <item.icon
                              className={classNames(
                                  "text-gray-400 group-hover:text-gray-500",
                                  "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                          />
                          {item.name}
                        </div>
                    );
                  } else {
                    return (
                        <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                                item.current
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            )}
                        >
                          <item.icon
                              className={classNames(
                                  item.current
                                      ? "text-gray-500"
                                      : "text-gray-400 group-hover:text-gray-500",
                                  "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                    );
                  }
                })}
              </nav>
            </div>
          </div>
        </div>
      </>
  );
};

export default Sidebar;
