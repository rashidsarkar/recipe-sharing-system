import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Footer/Navbar/Navbar";

function MainLayout() {
  return (
    <div data-theme="wireframe" className="mx-auto max-w-7xl ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
