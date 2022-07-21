import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cookies from 'universal-cookie';

import { 
  Home,
  AboutUs, 
  Contact, 
  Questions, 
  Services, 
  News, 
  NewsDetails, 
  Blogs, 
  BlogDetails, 
  Register, 
  Agent, 
  Education, 
  Registered,
  EducationInfo,
  University,
  AllUniversities,
  ProgramDetails,
  ProgramsFilterPage,
  Applications,
  Login,
  Programs,
  Profile,
  NotFound
} from "../pages";

const cookie = new Cookies()

const AllRoutes = () => {
  const user = useSelector(({user}) => user.user);
  const [authenticated, setAuthenticated] = useState(true)

  const checkAuth = async () => {
    const auth = cookie.get('layanAuth');
    console.log(auth)
    if(auth) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }

  useEffect(() => {
    const auth = cookie.get('layanAuth');
    console.log(auth)
    if(auth) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }, [cookie.get('layanAuth')])

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={!authenticated ? <Login /> : <Navigate to='/' />} />
      
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/contact-us" element={<Contact />} />

      <Route path="/questions" element={<Questions />} />

      <Route path="/services" element={<Services />} />

      <Route path="/news" element={<News />} />
      
      <Route path="/news/:newsId" element={<NewsDetails />} />

      <Route path="/blogs" element={<Blogs />} />

      <Route path="/blogs/:blogId" element={<BlogDetails />} />

      <Route path="/register" element={!authenticated ? <Register /> : <Navigate to='/' />} />

      <Route path="/registered" element={!authenticated ? <Registered /> : <Navigate to='/' />} />

      <Route path="/agent" element={<Agent />} />

      <Route path="/education" element={<Education />} />

      <Route path="/education-info" element={authenticated ? <EducationInfo /> : <Navigate to="/login" />} />

      <Route path="/university/:id" element={<University />} />

      <Route path="/all-universities" element={<AllUniversities />} />

      <Route path="/program/:id" element={<ProgramDetails />} />

      <Route path="/programs-filter" element={<ProgramsFilterPage />} />

      {/* <Route path="/applications" element={<Applications />} /> */}

      <Route path="/programs" element={<Programs />} />

      {console.log(authenticated)}

      <Route path="/profile" element={authenticated ? <Profile /> : <Navigate to='/login' />} />

      <Route path="/*" element={<NotFound />} />
      
    </Routes>
  )
}

export default AllRoutes;