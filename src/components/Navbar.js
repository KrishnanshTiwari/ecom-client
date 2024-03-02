import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar({ children }) {
  const location = useLocation();
  const navigation = [
    { name: "Home", to: "/", current: location.pathname === "/" },
    {
      name: "Products",
      to: "/product",
      current: location.pathname === "/product",
    },
  ];

  const userNavigation = [
    { name: "Your Profile", to: "/profile" },
    { name: "Become a Seller", to: "/become-seller" },
    { name: "Sign out", to: "/login" },
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
                        <Menu.Button className="flex items-center rounded-full bg-[#2d163f] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d163f]">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.to}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-[#2d163f]"
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  </div>
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
                    as="a"
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
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                  </div>
                  <Link
                    to="/cart"
                    className="ml-auto flex-shrink-0 rounded-full bg-[#2d163f] p-1 text-[#e8c2d3] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d163f]"
                  >
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#e8c2d3] hover:bg-gray-700"
                    >
                      <Link to={item.to}>{item.name}</Link>
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default NavBar;
