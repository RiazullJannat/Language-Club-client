import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import { toast } from "react-toastify";
import PrivateTutorCard from "../PrivateTutorCard";
const getBookedTutors =async (email) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/booked-tutors`, {
        params:{email}
    });
    return res.data;
}
const MyBookedTutors =  () => {
    const {user} = useAuth();
    const {data:bookedTutors=[],isLoading, isError, error} =useQuery({
        queryKey: ['bookedTutors'],
        queryFn: ()=>getBookedTutors(user.email),
    })
    console.log(bookedTutors)
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        toast.error(error.message)
    }
    return (
        <div>
            {
                bookedTutors.map(tutor=><PrivateTutorCard key={tutor._id} tutor={tutor}></PrivateTutorCard>)
            }
        </div>
    );
};

export default MyBookedTutors;