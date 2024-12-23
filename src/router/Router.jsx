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
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);


export default router;