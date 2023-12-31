import { Link } from "react-router-dom";
import { star } from "../nike_landing_assets/assets/icons";

const PopularProductCard = ({ imgURL, id, name, price, animateValue }) => {
  return (
    <Link to={`/product/${id}`}>
      <div
        className="flex flex-1 flex-col max-sm:w-full cursor-pointer"
        data-aos={animateValue}
      >
        <img src={imgURL} alt={name} className="w-[272px] h-[272px]" />
        <div
          className="mt-8 flex 
           justify-start gap-2.5"
        >
          <img src={star} alt="rating" width={24} height={24} />
          <p
            className="font-montserrat 
           leading-normal text-xl text-slate-gray"
          >
            (4.5)
          </p>
        </div>
        <h3
          className="mt-2 text-2xl 
        leading-normal font-semibold font-palanquin"
        >
          {name}
        </h3>
        <p
          className="mt-2 font-semibold 
        font-montserrat text-coral-red
        text-base leading-normal"
        >
          {price}
        </p>
      </div>
    </Link>
  );
};

export default PopularProductCard;
