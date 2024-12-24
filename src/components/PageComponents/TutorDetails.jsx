import { useLoaderData } from "react-router-dom";
import { FaStar, FaLanguage } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const TutorDetails = () => {
    // Retrieve the tutor's data from the loader
    const {user} = useAuth();
    const [tutor] = useLoaderData();
    const { _id, name, image, language, description, price, review,email } = tutor || {};
    const handleBook = () => {
        const data = {
            tutor_id:_id,
            tutor_email:email,
            image,
            price,
            name,
            language,
            review,
            description,
            bookBy:user.email,
        }
        console.log(data)
        axios.post(`${import.meta.env.VITE_BASE_URL}/book-tutor`, data)
        .then(()=>{
            toast.success('added successfully')
        })
        .catch(error=> toast.error(error.message))
    }
    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-6 border border-gray-200 shadow-lg rounded-lg p-4 bg-gray-800">
                {/* Tutor Image */}
                <div className="flex-shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full shadow-md"
                    />
                </div>

                {/* Tutor Details */}
                <div className="flex flex-col justify-between flex-grow text-white">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                        <p className="flex items-center">
                            <FaLanguage className="mr-2 text-primary" /> {language}
                        </p>
                        <p className="mt-4">{description}</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-lg font-semibold">
                            Price: <span className="text-primary">BDT {price}</span>
                        </p>
                        <p className="flex items-center mt-2">
                            <FaStar className="text-yellow-500 mr-2" />
                            {review} Reviews
                        </p>
                    </div>

                    {/* Book Button */}
                    <button onClick={handleBook} className="btn btn-primary mt-6 w-full md:w-auto">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;
