import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../services/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Button1 from "../components/Button1";
import Loader from "../components/Loader";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleuploadimage = async (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!image) {
      alert("Please select an image");
      return;
    }

    const imageRef = ref(storage, title);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            const imageUrl = url;
            const token = localStorage.getItem("token");
            fetch(
              "https://ecommerce-backend-w0k9.onrender.com/seller/addtoproducts",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  sessionToken: token,
                },
                body: JSON.stringify({
                  title,
                  price,
                  image: imageUrl,
                  description,
                  category,
                }),
              }
            )
              .then((response) => {
                if (response.ok) {
                  console.log(imageUrl);
                  alert("Added successfully");
                  setLoading(false);
                  navigate("/");
                } else {
                  alert("Something went wrong");
                }
              })
              .catch((error) => {
                console.error("Error during profile update:", error);
                alert("Something went wrong");
              });
          })
          .catch((error) => {
            console.log(error.message, "error getting the image URL");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      {loading && <Loader />}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-4">
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
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:purple-indigo-500 sm:text-sm "
              />
            </div>
          </div>
          <div className="mb-4">
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mb-4">
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset placeholder:text-gray-400  focus:ring-purple-800 sm:text-sm sm:leading-6"
              >
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button1 type="submit" onClick={handleSubmit} data="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
