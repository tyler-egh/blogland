import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Single } from "./pages/Single";
import Write from "./pages/Write";


const Layout= () =>{
  return(
    <>
     <Navbar/>
    <Outlet/>
    <Footer/>
    </>
   
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/post/:id",
        element:<Single/>
      },
      {
        path: "/edit",
        element:<Write/>
      },

    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
 
]);
function App(){
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
  }

 
export default App
