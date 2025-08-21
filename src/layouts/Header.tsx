import BasketItems from "../components/BasketItems"
import TotalPrice from "../components/TotalPrice"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { selectTotalPrice } from "../store/selectors"

const Header = () => {
    const basket = useSelector((state: RootState) => state.basket.basket)
    const totalPrice = useSelector(selectTotalPrice)

    return (
        <nav className="flex flex-row justify-end p-4 border-b text-base">
            <BasketItems basket={basket} />
            <TotalPrice totalPrice={totalPrice} />
        </nav>
    )
}

export default Header