import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import "remixicon/fonts/remixicon.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "highlight.js/styles/github.css";
import ProjectsPage from "./pages/Projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/about",
          element: <AboutPage />,
        },
        { path: "/projects", element: <ProjectsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
