import TopNav from "../components/Layouts/TopNav";
import Footer from "../components/Layouts/Footer";

const ErrorPage = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <TopNav className="min-h-[10vh]" />
      <main className="h-[80vh] max-h-[80vh] border-x border-lines-10 flex flex-col items-center justify-center">
        {/* <div className="contents relative">
          <h1 className="text-[6rem] font-bold absolute z-30">404</h1>
          <h1 className="text-[6rem] font-bold absolute mt-1 ml-1 text-accent-10 z-20">
            404
          </h1>
          <h1 className="text-[6rem] font-bold absolute mt-2 ml-2 text-accent-20 z-10">
            404
          </h1>
        </div> */}
        <span className="text-[6rem] font-bold relative">
          <h1>404</h1>
          <h1 className="text-[6rem] font-bold absolute top-[4%] text-accent-10 -z-10">
            404
          </h1>
          <h1 className="text-[6rem] font-bold absolute top-[8%] text-accent-20 -z-20">
            404
          </h1>
        </span>
        <div className=" w-4/5 sm:w-1/3 text-center flex flex-col gap-4">
          <h2>page_not_found</h2>
          <p className=" text-secondary-10">
            We suggest you go to homepage while we fixing the problem
          </p>
          <a
            href="/"
            className="py-2 px-4 bg-lines-10 rounded self-center inline-block text-secondary-10 hover:text-secondary-40 transition-all"
          >
            go-home
          </a>
        </div>
      </main>
      <Footer className="min-h-[10vh]" />
    </div>
  );
};

export default ErrorPage;
