import { useEffect } from "react";
import Button from "../components/Button";
// import { arrowRight } from "../nike_landing_assets/assets/icons";
import { shoe8 } from "../nike_landing_assets/assets/images";
import AOS from 'aos';
import 'aos/dist/aos.css';


const SuperQuality = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="about-us"
      className="flex justify-between
      items-center max-lg:flex-col
      gap-10 w-full max-container">

      <div className="flex flex-1 flex-col" data-aos="fade-right">
        <h2
          className="font-palanquin 
          text-4xl capitalize font-bold
          lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring permium comfort and style, our meticulously crafted footwear
          is deigned to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and 
          excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View detail"/>
        </div>
      </div>

      <div className="flex flex-1 
      justify-center items-center"  data-aos="fade-left">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

    </section>
  );
};

export default SuperQuality;
