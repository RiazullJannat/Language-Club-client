import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../components/PageComponents/Home";
import FindTutors from "../components/PageComponents/FindTutors";
import MyBookedTutors from "../components/PageComponents/MyBookedTutors";
import AddTutorials from "../components/PageComponents/AddTutorials";
import MyTutorials from "../components/PageComponents/MyTutorials";
import Login from "../components/PageComponents/Auth/Login";
import Register from "../components/PageComponents/Auth/Register";
import Error from "../components/common/Error"
import Private from "../private/Private";
import axios from "axios";
import TutorDetails from "../components/PageComponents/TutorDetails";
import Loading from "../components/common/Loading";
const fallbackElement = <Loading></Loading>;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/findTutors',
        element: <FindTutors></FindTutors>,
        loader: async () => {
          const response = axios.get(`${import.meta.env.VITE_BASE_URL}/find-tutors`);
          return (await response).data
        }
      },
      {
        path: '/findTutors/:category',
        element: <FindTutors></FindTutors>,
        loader: async ({ params }) => {
          const response = axios.get(`${import.meta.env.VITE_BASE_URL}/find-tutors?category=${params.category}`)
          return (await response).data
        }
      },
      {
        path: '/tutor/:details',
        element: <Private><TutorDetails></TutorDetails></Private>,
        loader: async ({ params }) => {
          console.log("params:",params.details)
          const response = axios.get(`${import.meta.env.VITE_BASE_URL}/find-tutors?id=${params.details}`)
          return (await response).data
        }
      },
      {
        path: '/addTutorials',
        element: <Private><AddTutorials></AddTutorials></Private>
      },
      {
        path: '/myTutorials',
        element: <MyTutorials></MyTutorials>
      },
      {
        path: '/myBookedTutors',
        element: <MyBookedTutors></MyBookedTutors>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
],{fallbackElement});


export default router;