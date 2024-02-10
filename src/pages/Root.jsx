import { Outlet } from "react-router-dom";
import TopNav from "../components/Layouts/TopNav";
import Footer from "../components/Layouts/Footer";

function RootLayout() {
  return (
    <div className="max-h-screen overflow-hidden">
      <TopNav className="min-h-[10vh]" />
      <main className="h-[80vh] max-h-[80vh] border-x border-lines-10">
        <Outlet />
      </main>
      <Footer className="min-h-[10vh]" />
    </div>
  );
}

export default RootLayout;
