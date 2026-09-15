import { useEffect, useState } from "react";
import Button from "../../Components/Button";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
function Slider() {
  const [imageId, setImageId] = useState(0);
  useEffect(() => {
    const interval = setInterval(function () {
      setImageId((prevId) => (prevId === 2 ? 0 : prevId + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [setImageId, imageId]);
  return (
    <div className="flex flex-col sm:flex-row h-custom">
      <div className="w-full h-1/2 sm:h-auto py-5 sm:w-1/2 text-red-500 bg-[#fdf4ff] gap-5 flex justify-center items-center flex-col px-10 text-center uppercase">
        <div>
          <p className="text-3xl sm:text-6xl font-bold">
            {data[imageId]?.title}
          </p>
        </div>
        <Button to="menu">Order Now</Button>
      </div>
      <div className="flex-1 h-1/2 sm:h-full">
        <img
          src={data[imageId]?.image}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
