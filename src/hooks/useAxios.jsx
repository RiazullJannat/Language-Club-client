import axios from "axios";

const simpleAxios = axios.create({
    baseURL:`${import.meta.env.VITE_BASE_URL}`
})

const useAxios = () => {
   return simpleAxios;
};

export default useAxios;