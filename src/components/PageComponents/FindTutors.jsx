import { useLoaderData } from "react-router-dom";
import TutorCard from "../TutorCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../common/Loading";
import { toast } from "react-toastify";

const fetchSearch = async (search) => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/search?search=${search}`)
    if (data.length === 0) {
        toast.warn('no data found')
    }
    return data;
}
const FindTutors = () => {
    const [searchText, setSearchText] = useState('');
    const data = useLoaderData();
    const { data: searchResult = [], isLoading, isError, error } = useQuery({
        queryKey: ["SearchResult",searchText],
        queryFn: () => fetchSearch(searchText),
        enabled: !!searchText,
    })
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(e.target.search.value)
    }
    if (isError) {
        toast.error(error.message)
    }
    return (
        <div className="my-6">
            <h1 className="text-center text-3xl md:text-6xl font-bold md:font-extrabold my-4">Tutors</h1>
            <form className="text-center my-4" onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by language"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <input type="submit" value='search' className="p-2 border border-gray-300 rounded-md" />

            </form>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        (searchResult && searchResult.length > 0 ? (
                            searchResult.map(tutor => (
                                <TutorCard key={tutor?._id} tutor={tutor} />
                            ))
                        ) : (
                            data.map(tutor => (
                                <TutorCard key={tutor?._id} tutor={tutor} />
                            ))
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default FindTutors;