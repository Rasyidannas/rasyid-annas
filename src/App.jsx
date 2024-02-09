import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import "remixicon/fonts/remixicon.css";
import HomePage from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
