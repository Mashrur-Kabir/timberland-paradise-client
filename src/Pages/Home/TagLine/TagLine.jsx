import Marquee from "react-fast-marquee";
import { FaCrown, FaChessKnight, FaFeather, FaBolt, FaFire, FaInfinity, FaGem, FaDragon } from "react-icons/fa";

const TagLine = () => {
  return (
    <div className="bg-black text-white py-4 font-syne font-bold pb-28">
      <Marquee speed={60} gradient={false}>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          AESTHETIC <FaChessKnight className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-pink-500" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          ELEGANT <FaCrown className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-yellow-400" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          EFFICIENT <FaFeather className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-400" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          BOLD <FaBolt className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-red-500" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          FUNCTIONAL <FaInfinity className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-purple-500" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          DYNAMIC <FaFire className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-500" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          SPECIAL <FaGem className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-fuchsia-500" />
        </span>
        <span className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]">
          TRANQUIL <FaDragon className="mx-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-green-500" />
        </span>
      </Marquee>
    </div>
  );
};

export default TagLine;
