import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import "remixicon/fonts/remixicon.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "highlight.js/styles/github.css";
import ProjectsPage from "./pages/Projects";
import Contact, { action as contactAction } from "./pages/Contact";
import ErrorPage from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      basename: "/rasyid-annas",
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "about",
          element: <AboutPage />,
        },
        { path: "projects", element: <ProjectsPage /> },
        { path: "contact", element: <Contact />, action: contactAction },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
