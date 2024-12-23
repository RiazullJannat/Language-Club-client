
const AddTutorials = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded">
            <h2 className="text-2xl font-bold text-center mb-6">Add Tutorial</h2>
            <form>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        readOnly
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        readOnly
                    />
                </div>

                {/* Image Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        name="image"
                        type="url"
                        placeholder="Enter image URL"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Language Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="language">
                        Language
                    </label>
                    <input
                        name="language"
                        type="text"
                        placeholder="Enter tutorial language"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Price Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        name="price"
                        type="number"
                        placeholder="Enter price"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Description Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>

                {/* Review Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
                        Review
                    </label>
                    <input
                        name="review"
                        type="number"
                        placeholder="Review (default 0)"
                        className="w-full px-4 py-2 border rounded bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTutorials;