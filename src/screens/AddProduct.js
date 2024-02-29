import React from "react";
import Button1 from "../components/Button1";
function AddProduct() {
  return (
    <>
      <div className="min-h-[60vh] w-4/5 sm:w-2/5 mx-auto py-7">
        <h1 className="text-4xl font-bold tracking-tight text-[#2d163f] mb-4">
          Add Product
        </h1>
        <form>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                Title
              </label>
            </div>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="title"
                autoComplete="title"
                required
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                Price
              </label>
            </div>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                autoComplete="price"
                required
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                Image
              </label>
            </div>
            <div className="mt-2">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:purple-indigo-500 sm:text-sm "
              />
            </div>
          </div>
          <div class="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div class="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                Category
              </label>
            </div>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset placeholder:text-gray-400  focus:ring-purple-800 sm:text-sm sm:leading-6"
              >
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="flex justify-end">
            <Button1 data="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
