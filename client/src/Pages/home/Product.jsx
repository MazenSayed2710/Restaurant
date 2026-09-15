import { Link } from "react-router-dom";

function Product(data) {
  const { name, image, smallPrice, description, id, type } = data.data;
  return (
    <Link
      to={`menu/${type}/${id}`}
      className="flex justify-center items-center 
    flex-col gap-7 text-red-500 text-xl md:w-[50vw]  xl:w-[33.4vw] w-[100vw]  hover:bg-fuchsia-50 py-3"
      style={{ transitionDuration: "0.5s" }}
    >
      <img
        src={image}
        width={500}
        height={500}
        className="object-contain hover:rotate-45 w-[300px] sm:w-[400px]"
        style={{ transitionDuration: "0.5s" }}
      />
      <h2 className=" text-2xl font-bold ">{name}</h2>
      <p className=" text-center text-base  sm:text-xl px-10">{description}</p>
      <span className="font-bold">${smallPrice}</span>
      <button className="p-2 bg-red-500 text-green-100 rounded-md mb-10">
        Order
      </button>
    </Link>
  );
}

export default Product;
