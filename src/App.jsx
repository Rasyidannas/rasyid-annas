import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import "remixicon/fonts/remixicon.css";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <RootLayout /> }]);

  return <RouterProvider router={router} />;
}

export default App;
