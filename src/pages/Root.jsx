import { Outlet } from "react-router-dom";
import TopNav from "../components/Layouts/TopNav";
import Footer from "../components/Layouts/Footer";

function RootLayout() {
  return (
    <>
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
