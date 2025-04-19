import { Link } from "react-router-dom";

function MenuItem({
  sectionName,
  description,
  backgroundImg,
  textColor,
  type,
}) {
  return (
    <div
      className="p-10 sm:h-[50vh] w-[350px] sm:w-[550px] rounded-3xl"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <h1
        className="font-bold uppercase text-2xl sm:text-3xl mb-7"
        style={{ color: textColor }}
      >
        {sectionName}
      </h1>
      <p
        style={{ color: textColor }}
        className="sm:text-xl sm:w-auto text-[15px] w-52"
      >
        {description}
      </p>
      <div className="mt-12">
        <Link
          to={`${type}`}
          className="bg-slate-800 text-gray-100 px-4 py-3 rounded-full"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
