import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../constants";
import Nav from "../components/Nav";
import { bigShoe1 } from "../nike_landing_assets/assets/images";
import Button from "../components/Button";
import { heart } from "../nike_landing_assets/assets/icons";

const ProductDetails = () => {
  const [productData, setProductData] = useState();

  const [mainImageSrc, setMainImageSrc] = useState();

  const { id } = useParams();
  // const navigate = useNavigate();
  console.log("ID", id);

  const handleMouseOver = (event) => {
    setMainImageSrc(event.target.src);
  };

  useEffect(() => {
    const product = products.find((item) => item.id === id);
    setProductData(product);

    if (product && product.thumbnail && product.thumbnail.length > 0) {
      setMainImageSrc(product.thumbnail[0]);
    }
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative">
      <Nav />
      <section
        id="home"
        className="w-full flex xl:flex-row 
            flex-col justify-center items-start min-h-screen 
            gap-10 max-container pt-32"
      >
        <div
          className="relative flex
          justify-center items-center xl:min-h-screen max-xl:py-30 max-sm:flex-col-reverse gap-6"
        >
          <div className="flex flex-1 flex-col gap-5 max-sm:flex-row">
            {productData.thumbnail.map((imag, index) => (
              <div
                key={index}
                className="w-[90px] h-[100px] border-[2px] p-1 cursor-pointer hover:scale-125 transition-all"
              >
                <img
                  src={imag}
                  alt="show collection"
                  className="object-contain w-[90px] h-[90px] relative z-10"
                  onMouseOver={handleMouseOver}
                />
              </div>
            ))}
          </div>
          <img
            src={mainImageSrc}
            alt="show collection"
            width={510}
            height={500}
            className="object-contain relative z-10"
          />
        </div>

        <div
          className="relative
          xl:w-2/5 flex flex-col
          items-start w-full max-xl:padding-x"
        >
          <h1
            className="mt-10 font-palanquin text-4xl
              max-sm:leading-[30px] max-sm:text-[52px] 
              font-semibold"
          >
            {productData.name}
          </h1>
          <p className="mt-2 font-montserrat text-xl font-semibold">
            Men&apos;s shoes
          </p>
          <p
            className="font-montserrat text-slate-gray 
              text-lg leading-8 mt-6 sm:max-w-sm"
          >
            MRP : {productData.price}
          </p>
          <p
            className="font-montserrat text-slate-gray 
              text-base leading-8 sm:max-w-sm"
          >
            incl. of taxes (Also includes all applicable duties)
          </p>
          <p
            className="font-montserrat mt-10 w-full text-justify text-slate-gray 
               text-base leading-8 sm:max-w-sm font-semibold"
          >
            {productData.desc}
          </p>

          <div className="flex w-[424px] mt-14 justify-between items-center">
            <p
              className="font-montserrat text-black 
              text-base leading-8 sm:max-w-sm font-semibold"
            >
              Select Size
            </p>
            <p
              className="font-montserrat text-slate-gray 
               text-base leading-8 sm:max-w-sm font-semibold"
            >
              Size Guide
            </p>
          </div>
          <div
            className="w-[410px] h-auto grid
            md:grid-cols-3
            sm:grid-cols-2 
            grid-cols-1 sm:gap-5 gap-16"
          >
            {productData.size.map((item) => (
              <div
                key={item}
                className="w-[132px] flex justify-center 
                    items-center rounded-lg text-center 
                    h-[50px] border border-gray-200 cursor-pointer hover:border-gray-400"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 mb-14 flex w-full justify-start gap-4 items-center">
            <Button label="Add To Cart" />
            <Button
              label="Add to Favourite"
              iconURL={heart}
              textColor="white"
              backgroundColor="white"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
