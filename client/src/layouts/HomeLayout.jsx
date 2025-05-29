import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/navbar/Navbar";
import ScrollToTop from "@/layouts/ScrollToTop";
import Topbar from "@/layouts/topbar/Topbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="z-2">
        <div className="shadow-xl/30">
          <Topbar />
          <Navbar />
        </div>
      </header>

      <main className="z-1">
        <Outlet />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default HomeLayout;
