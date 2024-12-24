import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyBookedTutors =  () => {
    const {user} = useAuth();
    const bookedTutors = axios(`${import.meta.env.VITE_BASE_URL}/booked-tutors`, {params:{email:user.email}})

    return (
        <div>
            coming....
        </div>
    );
};

export default MyBookedTutors;