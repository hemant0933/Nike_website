import { useEffect } from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularProducts = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section
      id="products"
      className="w-full max-container max-sm:mt-12">
      <div
        className="flex flex-col justify-start 
         gap-5">
        <h2 className="text-4xl 
          font-palanquin 
          font-bold">
          Our 
          <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat
        text-slate-gray">
            Experience unparalleled quality 
            and style with our exclusive 
            selections. Immerse yourself in a 
            world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid
        lg:grid-cols-4 
        md:grid-cols-3
        sm:grid-cols-2 
        grid-cols-1 sm:gap-5 gap-16">
        {products.map((product,i) => {

          return ( i%2 == 0 ? 
          ( <PopularProductCard
              key={product.name}
              id={product.id}
              animateValue="fade-down"
  
            {...product}
          />):(
            <PopularProductCard
              key={product.imgURL}
              id={product.id}
              animateValue="fade-up"
  
            {...product}
          />
          ))
        }
        )}
      </div>
    </section>
  );
};

export default PopularProducts;
