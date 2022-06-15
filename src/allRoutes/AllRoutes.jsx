import { Routes, Route } from "react-router-dom";

import { Home, Signin, AboutUs, Contact, Questions, Services, News } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/contact-us" element={<Contact />} />

      <Route path="/questions" element={<Questions />} />

      <Route path="/services" element={<Services />} />

      <Route path="/news" element={<News />} />

      <Route path="/signin" element={<Signin />} />
      
    </Routes>
  )
}

export default AllRoutes