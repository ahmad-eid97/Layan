import { Routes, Route } from "react-router-dom";

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
  Profile
} from "../pages";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/contact-us" element={<Contact />} />

      <Route path="/questions" element={<Questions />} />

      <Route path="/services" element={<Services />} />

      <Route path="/news" element={<News />} />
      
      <Route path="/news/:newsId" element={<NewsDetails />} />

      <Route path="/blogs" element={<Blogs />} />

      <Route path="/blogs/:blogId" element={<BlogDetails />} />

      <Route path="/register" element={<Register />} />

      <Route path="/registered" element={<Registered />} />

      <Route path="/agent" element={<Agent />} />

      <Route path="/education" element={<Education />} />

      <Route path="/education-info" element={<EducationInfo />} />

      <Route path="/university/:id" element={<University />} />

      <Route path="/all-universities" element={<AllUniversities />} />

      <Route path="/program/:id" element={<ProgramDetails />} />

      <Route path="/programs-filter" element={<ProgramsFilterPage />} />

      <Route path="/applications" element={<Applications />} />

      <Route path="/programs" element={<Programs />} />

      <Route path="/profile" element={<Profile />} />
      
    </Routes>
  )
}

export default AllRoutes;