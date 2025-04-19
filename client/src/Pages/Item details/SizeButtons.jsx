function SizeButtons({ size, setSize }) {
  return (
    <div className=" flex items-center sm:gap-10 gap-5 text-xl">
      <button
        className={`price-button ${size === "Small" && "active-button"}`}
        onClick={() => setSize("Small")}
      >
        Small
      </button>
      <button
        className={`price-button ${size === "Medium" && "active-button"}`}
        onClick={() => {
          setSize("Medium");
        }}
      >
        Medium
      </button>
      <button
        className={`price-button ${size === "Large" && "active-button"}`}
        onClick={() => setSize("Large")}
      >
        Large
      </button>
    </div>
  );
}

export default SizeButtons;
