import React from "react";
import { useAuth } from "../AuthContext";
import { Disclosure, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}

function NavBar({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuth();
  const location = useLocation();
  const navigation = [
    { name: "Home", to: "/", current: location.pathname === "/" },
    {
      name: "Products",
      to: "/product",
      current: location.pathname === "/product",
    },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-[#362744]">
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img className="h-8" src={logo} alt="EBAZAR" />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-[#44354f] text-white"
                              : "text-gray-300 hover:bg-[#44354f] hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  {isLoggedIn ? (
                    <div className="flex items-center">
                      <Link
                        to="/cart"
                        className="rounded-full bg-[#2d163f] p-1 text-[#e8c2d3] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d163f]"
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Link>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex text-[#e8c2d3] items-center rounded-full bg-[#2d163f] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d163f]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </Menu.Button>
                        </div>
                        <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-[#2d163f]"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/order-page"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-[#2d163f]"
                                )}
                              >
                                Your Orders
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                onClick={() => {
                                  logout();
                                }}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-[#2d163f]"
                                )}
                              >
                                log-out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className={classNames(
                        location.pathname === "/login"
                          ? "bg-[#44354f] text-white"
                          : "text-gray-300 hover:bg-[#44354f] hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      Log-in
                    </Link>
                  )}
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-bg-[#2d163f] p-2 text-[#e8c2d3] hover:bg-[#5d476e] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bg-[#2d163f]">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "bg-[#44354f] text-white"
                        : "text-gray-300 hover:bg-[#44354f] hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <Link to={item.to}>{item.name}</Link>
                  </Disclosure.Button>
                ))}
                {!isLoggedIn && (
                  <Disclosure.Button
                    className={classNames(
                      location.pathname === "/product"
                        ? "bg-[#44354f] text-white"
                        : "text-gray-300 hover:bg-[#44354f] hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    <Link to="login">Log-in</Link>
                  </Disclosure.Button>
                )}
              </div>
              {isLoggedIn && (
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.username}
                      </div>
                    </div>
                    <Link
                      to="/cart"
                      className="ml-auto flex-shrink-0 rounded-full bg-[#2d163f] p-1 text-[#e8c2d3] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d163f]"
                    >
                      <ShoppingCartIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-[#e8c2d3] hover:bg-gray-700">
                      <Link to="/profile">Your Profile</Link>
                    </Disclosure.Button>
                    <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-[#e8c2d3] hover:bg-gray-700">
                      <Link to="/order-page">Your Order</Link>
                    </Disclosure.Button>
                    <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-[#e8c2d3] hover:bg-gray-700">
                      <Link
                        to="/"
                        onClick={() => {
                          logout();
                          navigate("/");
                        }}
                      >
                        log-out
                      </Link>
                    </Disclosure.Button>
                  </div>
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default NavBar;
