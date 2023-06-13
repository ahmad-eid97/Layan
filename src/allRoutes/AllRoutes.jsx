import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from "../components/Navbar/Navbar";

import { Footer } from "../components";

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
  AdminRegister,
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

const AllRoutes = ({ authenticated }) => {
  const user = useSelector(({ user }) => user.user);
  const location = useLocation()
  const cookie = new Cookies();

  return (
    <>

      {(location.pathname === '/login' || location.pathname === '/register') && cookie.get('layanAuth') ?
        null
        :
        <Navbar />
      }

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/contact-us" element={<Contact />} />

        <Route path="/questions" element={<Questions />} />

        <Route path="/services" element={<Services />} />

        <Route path="/news" element={<News />} />

        <Route path="/news/:newsId" element={<NewsDetails />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blogs/:blogId" element={<BlogDetails />} />

        <Route path="/register" element={!user ? <Register /> : <Navigate to='/' />} />

        <Route path="/admin-register" element={!user ? <AdminRegister /> : <Navigate to='/' />} />

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

        <Route path="/profile" element={authenticated ? <Profile /> : <Navigate to='/login' />} />

        <Route path="/*" element={<NotFound />} />

      </Routes>

      {(location.pathname === '/login' || location.pathname === '/register') && cookie.get('layanAuth') ?
        null
        :
        <Footer />
      }


    </>
  )
}

export default AllRoutes;