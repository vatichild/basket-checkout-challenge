import Body from "./Body"
import Header from "./Header"
import { Outlet, useLocation } from "react-router-dom"

const Main = () => {
    const location = useLocation()
    const headlessRoutes = ["/success"]
    const hideHeader = headlessRoutes.includes(location.pathname)

    return (
        <div>
            {!hideHeader && <Header />}
            <Body>
                <Outlet />
            </Body>
        </div>
    )
}

export default Main