import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import { toast } from "react-toastify";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Modal from 'react-modal';


const myTutorial = async (email) => {
    const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/find-tutors`, { params: { email } })
    console.log(result.data);
    return result.data
}
const MyTutorials = () => {
    const { user } = useAuth();
    const { data: myTutorials = [], isError, isLoading, error, refetch } = useQuery({
        queryKey: ['MyTutorials'],
        queryFn: () => myTutorial(user.email)
    })
const handleDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${import.meta.env.VITE_BASE_URL}/delete-tutorial`,{params:{id}})
          .then(res=>{
            if(res.data.deletedCount){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
          })
          .catch(error=>{
            Swal.fire({
                title: "Error",
                text: `${error.message}`,
                icon: "error"
              });
          })
        }
      });
}
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        toast.error(error.message)
    }

    return (
        <div className="overflow-x-auto my-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            NO:
                        </th>
                        <th>Name/Image</th>
                        <th>Description/Review</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myTutorials.map((tutorial, ind) =>
                            <tr key={tutorial._id}>
                                <th>
                                    {ind + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={tutorial.image}
                                                    alt={tutorial.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{tutorial.name}</div>
                                            <div className="text-sm opacity-50">{tutorial.language}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {tutorial.description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{tutorial.review}  <FaStar></FaStar></span>
                                </td>
                                <td>{tutorial.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs ml-2" onClick={()=>handleDelete(tutorial._id)}><MdDeleteForever className="text-xl" /> Delete</button>
                                    <button className="btn btn-ghost btn-xs"><FaEdit className="text-xl" /> Edit</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTutorials;