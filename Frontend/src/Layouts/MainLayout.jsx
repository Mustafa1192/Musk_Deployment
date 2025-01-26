import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}
