import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RootLayout from './Layout/RootLayout.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './page/Home.jsx'
import MyEnrolledCourse from './page/MyEnrolledCourse.jsx'
import MyAddedCourse from './page/MyAddedCourse.jsx'


import Login from './page/Login.jsx'
import Register from './page/Register.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AllCourse from './page/AllCourse.jsx'
import AddCoursePage from './page/AddCoursePage.jsx'
import CourseDetails from './page/CourseDetails.jsx'
import Loading from './page/Loading/Loading.jsx'


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
         element:<AllCourse></AllCourse>,
          hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:'myEnrolledCourse',
        element:<PrivateRoute><MyEnrolledCourse></MyEnrolledCourse></PrivateRoute>
      },
      {
        path:'myAddedCourse',
        element:<PrivateRoute><MyAddedCourse></MyAddedCourse></PrivateRoute>
      },
      {
        path:'addCourse',
        element:<PrivateRoute><AddCoursePage></AddCoursePage></PrivateRoute>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'courses/:id',
        loader:()=>fetch(`https://omega-learn-server.vercel.app/courses`),
        element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
        hydrateFallbackElement:<Loading></Loading>
        
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
