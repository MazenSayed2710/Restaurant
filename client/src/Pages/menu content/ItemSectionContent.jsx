import { Link } from "react-router-dom";

function ItemSectionContent({ item }) {
  const { image, name, smallPrice, id } = item;
  return (
    <Link
      to={`${id}`}
      className="p-10 border-2 border-t-0 border-l-0 border-red-500 flex
     flex-col items-center  bg-red-100 gap-10  group"
    >
      <div>
        <img
          src={image}
          loading="lazy"
          alt=""
          className=" w-[95%] h-[50vh] object-contain group-hover:-rotate-45 "
          style={{ transitionDuration: "0.5s" }}
        />
      </div>
      <div className="text-2xl text-red-500 font-bold flex items-center justify-between w-full ">
        <h2>{name}</h2>
        <span>${smallPrice}</span>
        <button
          className=" uppercase bg-red-500 text-gray-100
         p-2 text-sm rounded-xl absolute right-3 hidden "
        >
          Explore
        </button>
      </div>
    </Link>
  );
}

export default ItemSectionContent;
