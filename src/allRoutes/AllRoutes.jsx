import { Routes, Route } from "react-router-dom";

import { Home, Signin, AboutUs, Contact } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/contact-us" element={<Contact />} />

      <Route path="/signin" element={<Signin />} />
      
    </Routes>
  )
}

export default AllRoutes