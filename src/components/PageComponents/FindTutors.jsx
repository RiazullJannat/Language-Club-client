import { useLoaderData } from "react-router-dom";
import TutorCard from "../TutorCard";

const FindTutors = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="my-6">
            <h1 className="text-center text-3xl md:text-6xl font-bold md:font-extrabold my-4">Tutors</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    data?.map(tutor => <TutorCard key={tutor?._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;