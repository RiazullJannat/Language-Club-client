
const PrivateTutorCard = ({tutor}) => {
    const {tutor_id, image, price, }
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Tutor Image */}
            <img className="w-full h-48 object-cover" src={image} alt={`${name}`} />

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

                {/* Review Button */}
                <button
                    onClick={handleReviewClick}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Review
                </button>
            </div>
        </div>
    );
};

export default PrivateTutorCard;