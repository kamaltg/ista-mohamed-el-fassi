import Breadcrumb from "@/layouts/Breadcrumb";
import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/navbar/Navbar";
import ScrollToTop from "@/layouts/ScrollToTop";
import Topbar from "@/layouts/topbar/Topbar";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="z-3 shadow-lg/20">
        <Topbar />
        <Navbar />
      </div>

      <header className="z-1">
        <Breadcrumb />
      </header>

      <main className="z-2">
        <Outlet />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default PageLayout;
