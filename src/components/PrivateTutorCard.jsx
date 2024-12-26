import axios from "axios";
import PropTypes from "prop-types"; 
// import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
const setReview = async (tutorId) => {
    const result = await axios.patch(`${import.meta.env.VITE_BASE_URL}/update-review?id=${tutorId}`,)
    return result;
}
const PrivateTutorCard = ({tutor, refetch}) => {
    const {tutor_id, image, price, language, name, review}=tutor;
    // const [localReview, setLocalReview] = useState(review);
    const handleReview = () => {
        setReview(tutor_id)
        .then(res=>{
            if(res.data.modifiedCount){
                // setLocalReview(localReview+1);
                refetch()
                toast.success('reviewed successfully..')
            }
        })
        .catch(error=>toast.error(error.message))
    }
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Tutor Image */}
            <img className="w-full h-2/4 object-cover flex-grow" src={image} alt={`${name}`} />

            {/* Card Content */}
            <div className="p-4">
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

                {/* Language */}
                <p className="text-gray-600">
                    <span className="font-medium">Language:</span> {language}
                </p>

                {/* Price */}
                <p className="text-gray-600">
                    <span className="font-medium">Price:</span> ${price}
                </p>

                {/* Review */}
                <p> <span className="font-medium">Review:</span> <span className="flex items-center gap-2"><FaStar></FaStar>{review}</span></p>
                <button
                    onClick={handleReview}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600  font-semibold py-2 px-4 rounded-lg"
                >
                    Review
                </button>
            </div>
        </div>
    );
};
PrivateTutorCard.propTypes = {
    tutor: PropTypes.object.isRequired,
    refetch:PropTypes.func 
};
export default PrivateTutorCard;