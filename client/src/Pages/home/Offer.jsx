import { useQuery } from "@tanstack/react-query";
import Button from "../../Components/Button";
import Countdown from "./Countdown";
import getOffers from "../../Services/apiPizza";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Spinner from "../../Components/Spinner";
import { useState } from "react";

function Offer() {
  const { data: offers, isLoading } = useQuery({
    queryKey: ["offer"],
    queryFn: getOffers,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <Spinner />;
  if (!offers || offers.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1,
    );
  };

  const { title, description, expiryDate, image } = offers[currentIndex];

  return (
    <div
      className="bg-[url('/offerBg.png')] bg-cover
     text-gray-100 flex sm:flex-row flex-col justify-around gap-10 py-12
      px-10 sm:h-[70vh] relative transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col justify-center gap-10 text-center h-full w-1/2">
        <h1 className="font-bold sm:text-6xl text-3xl">{title}</h1>
        <p className="text-gray-100 font-semibold text-base sm:text-xl">
          {description}
        </p>
        <Countdown>{expiryDate}</Countdown>
        <div>
          <Button to="menu">Order Now</Button>
        </div>
      </div>
      <div>
        <img src={image} width={500} height={500} />
      </div>
      {offers.length > 1 && (
        <>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 translate-x-[-50%] translate-y-[-50%] text-gray-100 text-3xl font-bold"
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 translate-x-[50%] translate-y-[-50%] text-gray-100 text-3xl font-bold"
          >
            <MdKeyboardArrowLeft />
          </button>
        </>
      )}
    </div>
  );
}

export default Offer;
