import { StrictMode, Suspense } from 'react'
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

import MyCourseDetails from './page/MyCourseDetails.jsx'
import Loading from './page/Loading/Loading.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    // errorElement:<Error></Error>,
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/', index: true,
        element:(<Suspense fallback={<Loading></Loading>}><Home></Home></Suspense>)
  
      },
      {
         path:'courses',
         element:(<Suspense fallback={<Loading></Loading>}><AllCourse></AllCourse></Suspense>),
         
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
        loader:({params})=>fetch(`http://localhost:3000/myCourse/${params.id}`),
        element:<PrivateRoute><AddCoursePage></AddCoursePage></PrivateRoute>
      },
      {
        path:'login',
        element:<Suspense fallback={<Loading></Loading>}><Login></Login></Suspense>
      },
      {
        path:'register',
        element:<Suspense fallback={<Loading></Loading>}><Register></Register></Suspense>
      },
      {
        path:'courses/:id',
        loader:()=>fetch(`https://omega-learn-server.vercel.app/courses`),
        element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
       
        
      },
      {
        path:'myCourse/:id',
        loader:({params})=>fetch(`http://localhost:3000/myCourse/${params.id}`),
        element:<Suspense fallback={<Loading></Loading>}><MyCourseDetails></MyCourseDetails>,</Suspense>
       

        


      }
    ]
   

  },
   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
