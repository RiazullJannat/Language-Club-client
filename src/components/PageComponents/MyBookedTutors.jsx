import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import { toast } from "react-toastify";
import PrivateTutorCard from "../PrivateTutorCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const getBookedTutors =async (axiosInstance,email) => {
    const res = await axiosInstance.get(`/booked-tutors`, {
        params:{email}
    });
    return res.data;
}
const MyBookedTutors =  () => {
    const axiosInstance = useAxiosSecure()
    const {user} = useAuth();
    const {data:bookedTutors=[],isLoading, isError, error, refetch} =useQuery({
        queryKey: ['bookedTutors'],
        queryFn: ()=>getBookedTutors(axiosInstance,user.email),
    })
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        toast.error(error.message)
    }
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 my-10">
            {
                bookedTutors.map(tutor=><PrivateTutorCard key={tutor._id} tutor={tutor} refetch={refetch}></PrivateTutorCard>)
            }
        </div>
    );
};

export default MyBookedTutors;