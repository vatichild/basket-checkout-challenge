import { useDispatch } from "react-redux"
import type {ChangeEvent} from "react"
import { changeQuantity, removeFromBasket, type TBasketItem } from "../store/basketSlice"
import Button from "./base/Button"
import Quantity from "./Quantity"
const DataTableListItem = ({ product }: { product: TBasketItem }) => {
    const dispatch = useDispatch()

    return (
        <tr>
            <td className="py-4 w-1/6">{product.name}</td>
            <td className="w-1/8">
                <Quantity
                    stock={product.basketLimit}
                    selected={product.quantity}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        return dispatch(
                            changeQuantity({
                                ...product,
                                quantity: Number(e.target.value),
                            })
                        )
                    }}
                />
            </td>
            <td className="w-1/8">£{product.price}</td>
            <td className="w-1/8">
                £{(product.price * product.quantity).toFixed(2)}
            </td>
            <td>
                <Button
                    severity="danger"
                    label="Remove All"
                    onClick={() => dispatch(removeFromBasket(product.sku))}
                />
            </td>
        </tr>
    )
}

export default DataTableListItem