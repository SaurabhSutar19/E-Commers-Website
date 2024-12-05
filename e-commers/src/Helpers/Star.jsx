import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ star, review }) => {
  const ratings = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="mt-4">
        {star >= index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div className="relative group flex justify-start items-center ">
      <div className="flex items-center">
        {ratings} <p className="mt-4 ml-2">({review} customer reviews)</p>
      </div>
      {/* Tooltip */}
      <div className="absolute   left-10    transform -translate-x-1/2 -mt-8 hidden group-hover:block bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-lg">
        {star}
      </div>
    </div>
  );
};

export default Star;
