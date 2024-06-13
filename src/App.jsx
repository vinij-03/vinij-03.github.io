import Home from "./components/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Work from "./components/WorkPage/Work";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Work',
    element: <Work />,
  },
  // {
  //   path: '/products/avatar',
  //   element: <Feed />,
  // },
])


function App() {

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
