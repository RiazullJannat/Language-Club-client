import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/PageComponents/Home";
import FindTutors from "../components/PageComponents/FindTutors";
import MyBookedTutors from "../components/PageComponents/MyBookedTutors";
import AddTutorials from "../components/PageComponents/AddTutorials";
import MyTutorials from "../components/PageComponents/MyTutorials";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/findTutors',
            element:<FindTutors></FindTutors>
        },
        {
            path:'/addTutorials',
            element:<AddTutorials></AddTutorials>
        },
        {
            path:'/myTutorials',
            element:<MyTutorials></MyTutorials>
        },
        {
            path:'/myBookedTutors',
            element:<MyBookedTutors></MyBookedTutors>
        }
      ]
    },
  ]);


export default router;