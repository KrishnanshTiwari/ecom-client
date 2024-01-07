import ProductCard from "../components/ProductCard";
import hero from "../assets/hero.png";
import nike from "../assets/nike.png";
import adidas from "../assets/adidas.png";
import calvin from "../assets/calvin-klein.png";
import levis from "../assets/levis.png";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
function Home() {
  return (
    <div>
      <div className="bg-[#B8DFE5]">
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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Your Text Here
              </h1>
              <p className="text-lg md:text-xl mt-4 mb-8">Your Subtitle Here</p>
              <button className="bg-white text-black px-6 py-3 rounded-full uppercase font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl mx-auto w-3/4 my-6 rounded-2xl">
          <div className="max-w-7xl px-4 py-2">
            <div className="flex justify-between font-bold border mx-6 mt-3 px-4 py-1">
              <div>
                <img src={adidas} alt="Colorful Background" />
              </div>
              <div>
                <img src={levis} alt="Colorful Background" />
              </div>
              <div>
                <img src={nike} alt="Colorful Background" />
              </div>
              <div>
                <img src={calvin} alt="Colorful Background" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl mx-auto w-[95%] my-8 rounded-lg">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured Products
            </h1>
          </div>
          <div className="flex flex-wrap pb-8 justify-around">
            {/* This is our products list  */}

            {products.map((product) => (
              <ProductCard data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
