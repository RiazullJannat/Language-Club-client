import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TutorCard = ({tutor}) => {
  const {name, image, language, price, review} = tutor;
  return (
    <div className="border rounded-lg shadow-md p-4 flex items-center gap-4">
      {/* Profile Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-20 h-20 rounded-full border"
      />

      {/* Info Section */}
      <div className="flex-1">
        {/* Name and Rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="flex items-center text-yellow-500 text-sm">
            <FaStar /> {review}
          </span>
        </div>
        {/* Language */}
        <p className="text-sm text-gray-500">{language}</p>
      </div>
      {/* Price and Button */}
      <div className="text-center">
        <p className="text-lg font-bold text-pink-600">BDT {price}</p>
        <Link to={`/tutor/${tutor._id}`} className="btn btn-sm  text-white">
         Details 
        </Link>
      </div>
    </div>
  );
};
TutorCard.propTypes = {
  tutor: PropTypes.object.isRequired,
};
export default TutorCard;