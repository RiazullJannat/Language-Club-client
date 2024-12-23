import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex items-center justify-center h-[100vh] min-w-full'>
            <h1 className="font-extrabold text-4xl">ERROR</h1>
            <h3 className="font-bold text-red-700 text-5xl">404</h3>
            <Link className="btn btn-ghost" to={'/'}>Back to Home</Link>
        </div>
    );
};

export default Error;