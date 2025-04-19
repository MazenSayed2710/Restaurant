import { Outlet } from "react-router-dom";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <HamburgerMenu />
      <Outlet />
    </div>
  );
}

export default AppLayout;
