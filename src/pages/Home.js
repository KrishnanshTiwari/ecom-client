import NavBar from '../components/Navbar'
import Hero from '../components/Hero';
import Brand from '../components/Brand';
import Footer from '../components/footer'
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
  ];
function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-[#B8DFE5]">

        

        


        
      <Hero/>
      <Brand/>


        <div className="bg-white shadow-xl mx-auto w-[95%] my-8 rounded-lg">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured Products
            </h1>
          </div>
            <div className="flex flex-wrap pb-8 justify-around">
                {/* This is our products list  */}
 
                      {products.map((product) => (
                        <div key={product.id} className="bg-[#DFE6E8] shadow-lg m-3 h-1/3 w-1/3 sm:w-1/5">
                          <div >
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="text-sm text-gray-700">
                                  {product.name}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                              </p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                              {product.price}
                            </p>
                          </div>
                        </div>
                      ))}
              
          </div>
        </div>

       
        <Footer/>

        
      </div>
    </div>
  );
}

export default Home;
