import { createBrowserRouter } from "react-router-dom"
import Main from "./layouts/Main"
import Products from "./pages/Products"
import Basket from "./pages/Basket"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: '/basket',
                element: <Basket />,
            }
        ],
    },
])

export default router