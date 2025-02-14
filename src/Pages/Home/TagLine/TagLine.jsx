import Marquee from "react-fast-marquee";
import { FaCrown, FaChessKnight, FaFeather, FaBolt, FaFire, FaInfinity, FaGem, FaDragon } from "react-icons/fa";

const TagLine = () => {
  return (
    <div className="bg-black text-white py-4 font-syne font-bold text-[120px] pb-28">
      <Marquee speed={60} gradient={false}>
        <span className="flex items-center">
          AESTHETIC <FaChessKnight className="mx-2 text-5xl text-pink-500" />
        </span>
        <span className="flex items-center">
          ELEGANT <FaCrown className="mx-2 text-5xl text-yellow-400" />
        </span>
        <span className="flex items-center">
          EFFICIENT <FaFeather className="mx-2 text-5xl text-blue-400" />
        </span>
        <span className="flex items-center">
          BOLD <FaBolt className="mx-2 text-5xl text-red-500" />
        </span>
        <span className="flex items-center">
          LIMITLESS <FaInfinity className="mx-2 text-5xl text-purple-500" />
        </span>
        <span className="flex items-center">
          DYNAMIC <FaFire className="mx-2 text-5xl text-fuchsia-500" />
        </span>
        <span className="flex items-center">
          SPECIAL <FaGem className="mx-2 text-5xl text-orange-500" />
        </span>
        <span className="flex items-center">
          TRANQUILITY <FaDragon className="mx-2 text-5xl text-green-500" />
        </span>
      </Marquee>
    </div>
  );
};

export default TagLine;
