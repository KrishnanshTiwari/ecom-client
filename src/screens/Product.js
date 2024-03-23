import React, { useState, useEffect } from "react";
import { Dialog, Disclosure, Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

function classNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

export default function Product() {
  const [sortOptions, setSortOptions] = useState([
    { name: "Most Popular", current: true },
    { name: "Best Rating", current: false },
    { name: "Price: Low to High", current: false },
    { name: "Price: High to Low", current: false },
  ]);
  const [filters, setFilters] = useState([
    {
      id: "category",
      name: "Category",
      options: [
        { value: "clothing", label: "clothing", checked: true },
        { value: "electronics", label: "electronics", checked: true },
        { value: "books", label: "books", checked: true },
        { value: "other", label: "other", checked: true },
      ],
    },
  ]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://ecommerce-backend-w0k9.onrender.com/getproducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } else {
        alert("Something went wrong...");
      }
    } catch (error) {
      console.error("Error during products loading:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSortChange = (option) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (option.name === "Most Popular") {
        return b.order - a.order; // Do not change the order
      } else if (option.name === "Best Rating") {
        return b.rating - a.rating; // Sort by rating descending
      } else if (option.name === "Price: Low to High") {
        return a.price - b.price; // Sort by price ascending
      } else if (option.name === "Price: High to Low") {
        return b.price - a.price; // Sort by price descending
      }
    });
    setFilteredProducts(sorted);
  };

  const handleFilterChange = (id, value, checked) => {
    const updatedFilters = filters.map((filter) => {
      if (filter.id === id) {
        const updatedOptions = filter.options.map((option) => {
          if (option.value === value) {
            return { ...option, checked };
          }
          return option;
        });
        return { ...filter, options: updatedOptions };
      }
      return filter;
    });

    setFilters(updatedFilters); // Update the filters state with the new values

    const selectedFilters = updatedFilters.flatMap((filter) =>
      filter.options
        .filter((option) => option.checked)
        .map((option) => option.value)
    );

    const filtered = products.filter((product) =>
      selectedFilters.includes(product.category)
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      {/* Mobile filter dialog */}
      {loading && <Loader />}
      {!loading ? (
        <>
          <div>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              open={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            >
              <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={(e) =>
                                        handleFilterChange(
                                          section.id,
                                          option.value,
                                          e.target.checked
                                        )
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
          <main className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-[#2d163f]">
                All Products
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center text-sm font-medium text-[#5d476e] hover:text-[#2d163f]">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              onClick={() => {
                                setSortOptions((prevOptions) =>
                                  prevOptions.map((prevOption) => ({
                                    ...prevOption,
                                    current: prevOption.name === option.name,
                                  }))
                                );
                                handleSortChange(option);
                              }}
                              className={classNames(
                                option.current
                                  ? "font-medium text-[#2d163f]"
                                  : "text-[#5d476e]",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Menu>

                <button
                  type="button"
                  className="ml-4 p-2 text-[#5d476e] hover:text-[#2d163f] sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    onChange={(e) =>
                                      handleFilterChange(
                                        section.id,
                                        option.value,
                                        e.target.checked
                                      )
                                    }
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap pb-8 justify-around">
                    {filteredProducts
                      .slice(indexOfFirstProduct, indexOfLastProduct) // Apply pagination
                      .map((product) => (
                        <div
                          className="sm:w-[40%] w-full my-3 mx-auto"
                          key={product._id}
                        >
                          <ProductCard data={product} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  className={`text-sm font-medium text-${
                    currentPage === 1 ? "gray-400" : "#2d163f"
                  } hover:bg-gray-50`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className={`text-sm font-medium text-${
                    currentPage ===
                    Math.ceil(filteredProducts.length / productsPerPage)
                      ? "gray-400"
                      : "#2d163f"
                  } hover:bg-gray-50`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredProducts.length / productsPerPage)
                  }
                >
                  Next
                </button>
              </div>

              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-[#5d476e]">
                    Showing{" "}
                    <span className="font-medium">
                      {indexOfFirstProduct + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                      {Math.min(indexOfLastProduct, filteredProducts.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium">
                      {filteredProducts.length}
                    </span>{" "}
                    results
                  </p>
                </div>
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    {Array.from(
                      {
                        length: Math.ceil(
                          filteredProducts.length / productsPerPage
                        ),
                      },
                      (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={classNames(
                            i + 1 === currentPage
                              ? "bg-[#4d2f62] text-white"
                              : "text-[#2d163f]",
                            "relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          )}
                        >
                          {i + 1}
                        </button>
                      )
                    )}
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={
                        currentPage ===
                        Math.ceil(filteredProducts.length / productsPerPage)
                      }
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className="min-h-[60vh]"></div>
      )}
    </>
  );
}
