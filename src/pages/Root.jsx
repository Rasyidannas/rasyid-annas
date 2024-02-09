import { Outlet } from "react-router-dom";
import TopNav from "../components/Layouts/TopNav";
import Footer from "../components/Layouts/Footer";

function RootLayout() {
  return (
    <div className="max-h-screen overflow-hidden">
      <TopNav className="h-[10vh]" />
      <main className="max-h-[80vh] overflow-y-scroll overflow-x-hidden">
        <Outlet />
      </main>
      <Footer className="h-[10vh]" />
    </div>
  );
}

export default RootLayout;
