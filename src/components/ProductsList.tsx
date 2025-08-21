import Button from "./base/Button"
import type { RootState } from "../store/store"
import { addToBasket, removeFromBasket } from "../store/basketSlice"
import { useDispatch, useSelector } from "react-redux"

const ProductsList = () => {
    const products = useSelector((state: RootState) => state.products.products)
    const basket = useSelector((state: RootState) => state.basket.basket)
    const dispatch = useDispatch()

    return (
        <>
            {products.map((product) => {
                return (
                    <div
                        className="flex flex-row justify-between items-center mt-4"
                        key={product.sku}>
                        <div className="w-1/6 font-bold">{product.name}</div>
                        <div className="w-1/4">{product.description}</div>
                        <div className="w-1/8">£{product.price}</div>
                        <Button
                            label="Add to Basket"
                            severity="secondary"
                            onClick={() => dispatch(addToBasket({...product, quantity: 1}))}
                        />
                        <Button
                            severity="danger"
                            disabled={!basket.some((item) => item.sku === product.sku)}
                            label="Remove from Basket"
                            onClick={() => dispatch(removeFromBasket(product.sku))}
                        />
                    </div>
                )
            })}
            <div className="flex flex-row justify-end mt-6">
                <Button
                    to="/checkout"
                    label="Proceed to checkout"
                    disabled={!basket.length}
                />
            </div>
        </>
    )
}

export default ProductsList