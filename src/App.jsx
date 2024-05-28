import './App.css'
import Login from './component/login'
import Signup from './component/Signin'
import Dashboard from './component/Dashboard'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

const Home=()=>{
  return (
    <> 
      <Outlet/>
    </>)
}
const router=createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },{
        path:"/signup",
        element:<Signup/>
      },{
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },
]);
const App=()=>{
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}
export default App
