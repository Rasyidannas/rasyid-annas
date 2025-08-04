import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import "remixicon/fonts/remixicon.css";
const HomePage = React.lazy(() => import ("./pages/Home"));
const AboutPage = React.lazy(() => import ("./pages/About"));
import "highlight.js/styles/github.css";
const ProjectsPage = React.lazy(() => import ("./pages/Projects"));
const Contact = React.lazy(() => import ("./pages/Contact"))
import { action as contactAction } from "./pages/Contact";
const ErrorPage = React.lazy(() => import ("./pages/Error"));

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

  return (
    <React.Suspense >
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
