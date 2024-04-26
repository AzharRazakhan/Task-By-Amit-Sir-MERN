import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'
import Signin from './component/Signin/Signin.jsx'
import Signup from './component/Signup/Signup.jsx'
import Forgetpassword from './component/Forgetpassword/ForgetPassword.jsx'
import Newpassword from './component/NewPassword/NewPassword.jsx'
import Dashboard from './component/Dashboard/Dashbord.jsx'

const router = createBrowserRouter(
  [
  {
    path:'/',
    element: <Layout/>,
    children : [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"user/:id",
        element: <User/>
      },
      {
        path:'github',
        element: <Github/>
      },
      {
        path:'signin',
        element: <Signin/>
      },
      {
        path:'signup',  
        element: <Signup/>
      },
      {
        path:'forget',
        element:<Forgetpassword/>
      },
      {
        path:'newpassword',
        element:<Newpassword/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>
      }

    ]
  }
]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
