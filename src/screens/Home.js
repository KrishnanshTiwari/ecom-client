import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import nike from "../assets/nike.png";
import adidas from "../assets/adidas.png";
import calvin from "../assets/calvin-klein.png";
import levis from "../assets/levis.png";
import poster from "../assets/poster.png";
const products = [
  {
    id: 1,
    title: "Basic T shirt",
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    category: "Black",
    rating : "4.5"
  },
  {
    id: 2,
    title: "Basic Tee",
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    category: "Black",
    rating : "4.5"
  },
  {
    id: 3,
    title: "Basic Tee",
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    category: "Black",
    rating : "4.5"
  },
  {
    id: 4,
    title: "Basic Tee",
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    category: "Black",
    rating : "4.5"
  },
];
function Home() {
  return (
    <div className="pb-6">
      <div className="relative bg-gradient-to-r from-yellow-500 to-pink-500 text-white">
        {/* Colorful background */}
        <div className="absolute top-4 bottom-0 left-0">
          <img
            src={hero}
            alt="Colorful Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex items-center justify-center h-72">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Shop Smart, Shop Easy
            </h1>
            <p className="text-lg md:text-xl mt-4 mb-8">
              Where Quality Meets Convenience
            </p>
            <Link to = '/product' className="bg-transparent text-white px-6 py-3 rounded-full uppercase font-semibold border-2 border-white backdrop-filter backdrop-blur-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-xl mx-auto w-[90%] md:w-3/4 my-8 rounded-2xl">
        <div className="max-w-7xl px-3 py-2 flex justify-between font-bold mx-5">
            <div>
              <img src={adidas} alt="adidas"
            className="w-4/5 md:w-[90%]" />
            </div>
            <div>
              <img src={levis} alt="levis" className="w-4/5 md:w-[90%]" />
            </div>
            <div>
              <img src={nike} alt="nike" className="w-4/5 md:w-[90%]" />
            </div>
            <div>
              <img src={calvin} alt="calvin" className="w-4/5 md:w-[90%]" />
            </div>
        </div>
      </div>
      <div className="bg-white shadow-xl mx-auto w-[95%] my-6 rounded-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Featured Products
          </h1>
        </div>
        <div className="flex flex-wrap pb-8 justify-around">
          {/* This is our products list  */}

          {products.map((product) => (
            <div className="w-[40%] sm:w-1/5">
            <ProductCard key={product.id} data={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-xl mx-auto w-[95%] my-6 rounded-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
        </div>
        <div className="flex flex-wrap pb-8 justify-around">
          {/* This is our products list  */}

          {products.map((product) => (
             <div className="w-[40%] sm:w-1/5">
            <ProductCard key={product.id} data={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 bg-purple-500 mx-auto w-[95%] ">
        <div className="flex flex-row sm:flex-row w-[80%] mx-auto justify-between items-center bg-yellow-500 px-8">
          <div className="w-[60%] my-6">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight text-white">
              Discover the Latest Trends!
            </h1>
            
          </div>
          <div className="w-[40%]">
            <img
              src={poster}
              alt="Colorful Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
