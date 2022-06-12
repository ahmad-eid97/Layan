import { Routes, Route } from "react-router-dom";

import { Home, Signin } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/signin" element={<Signin />} />
      
    </Routes>
  )
}

export default AllRoutes