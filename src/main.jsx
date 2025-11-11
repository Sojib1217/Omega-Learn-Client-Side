import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RootLayout from './Layout/RootLayout.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './page/Home.jsx'
import MyEnrolledCourse from './page/MyEnrolledCourse.jsx'
import MyAddedCourse from './page/MyAddedCourse.jsx'
import AddCourse from './page/AddCourse.jsx'
import Courses from './page/Courses.jsx'
import Login from './page/Login.jsx'
import Register from './page/Register.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/', index: true,
        element:<Home></Home>
  
      },
      {
         path:'courses',
         element:<Courses></Courses>
      },
      {
        path:'myEnrolledCourse',
        element:<MyEnrolledCourse></MyEnrolledCourse>
      },
      {
        path:'myAddedCourse',
        element:<MyAddedCourse></MyAddedCourse>
      },
      {
        path:'addCourse',
        element:<AddCourse></AddCourse>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
