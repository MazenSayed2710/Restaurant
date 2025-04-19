import { useEffect, useState } from "react";

function Countdown({ children }) {
  const [time, steTime] = useState("");
  useEffect(
    function () {
      const interval = setInterval(() => {
        let dateNow = new Date().getTime();
        let targerDate = new Date(children).getTime();
        let diffDate = targerDate - dateNow;
        let dayes = Math.floor(diffDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minuts = Math.floor(
          ((diffDate % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor(
          (((diffDate % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) %
            (1000 * 60)) /
            1000,
        );
        steTime(
          `${dayes.toString().length === 1 ? `0${dayes}` : dayes}:${hours.toString().length === 1 ? `0${hours}` : hours}:${minuts.toString().length === 1 ? `0${minuts}` : minuts}:${seconds.toString().length === 1 ? `0${seconds}` : seconds}`,
        );
      }, 1000);
      return () => clearInterval(interval);
    },
    [children],
  );

  return (
    <span className=" font-bold sm:text-6xl text-4xl text-yellow-400">
      {time}
    </span>
  );
}

export default Countdown;
