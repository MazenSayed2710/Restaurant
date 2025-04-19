import Button from "../../Components/Button";
import Countdown from "./Countdown";

function Offer() {
  return (
    <div
      className="bg-[url('/offerBg.png')] bg-cover
     text-gray-100 flex sm:flex-row flex-col  justify-around items-center gap-10 py-12
      px-10 sm:h-[70vh]"
    >
      <div className=" flex flex-col justify-between gap-10 text-center h-1/2">
        <h1 className="font-bold sm:text-6xl text-3xl">
          Delicious Burger & French Fry
        </h1>
        <p className=" text-gray-100 font-semibold text-base sm:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <Countdown>3 / 11 / 2024 ,00:00:00</Countdown>
        <div>
          <Button to="menu">Order Now</Button>
        </div>
      </div>
      <div className="h-1/2">
        <img
          src="./offerProduct.png"
          loading="lazy"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
}

export default Offer;
