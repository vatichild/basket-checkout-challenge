import { createBrowserRouter } from "react-router-dom"
import Main from "./layouts/Main"
import Products from "./pages/Products"
import Checkout from "./pages/Checkout.tsx"
import Success from "./pages/Success.tsx"

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
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: '/success',
                element: <Success />,
            }
        ],
    },
])

export default router