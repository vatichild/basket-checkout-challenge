import type {TBasketItem} from "../store/basketSlice"

const BasketItems = ({ basket }: { basket: TBasketItem[] }) => {
    return <div className="mr-4">Basket Items: {basket.length}</div>
}

export default BasketItems