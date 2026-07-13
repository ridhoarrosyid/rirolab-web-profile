import { Outlet } from "react-router";
import Navbar from "../components/Navbar-damarian";
import Footer from "../components/Footer-damarain";

export default function DamarianBizLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
