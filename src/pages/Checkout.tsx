import type { RootState } from "../store/store"
import type {ChangeEvent} from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCardNumber } from "../store/basketSlice"
import Button from "../components/base/Button.tsx";
import DataTable from "../components/DataTable"
import DataTableListItem from "../components/DataTableListItem"
import CardNumberInput from "../components/CardNumberInput"

const Checkout = () => {
    const { cardNumber, basket } = useSelector((state: RootState) => state.basket)
    const dispatch = useDispatch()
    const isSixteenDigits = (input: string) => {
        const regex = /^\d{16}$/
        return regex.test(input)
    }

    const displayCheckout = () => {
        if(!basket?.length){
            return <div className="text-center">
                <div className="text-2xl text-gray-500 mb-5">Your basket is empty</div>
                <Button to="/" label="Continue shopping"/>
            </div>
        }
        return <>
            <DataTable>
                {basket.map((product) => (
                    <DataTableListItem
                        key={product.sku}
                        product={product}
                    />
                ))}
            </DataTable>
            <CardNumberInput
                defaultValue={cardNumber}
                isValid={isSixteenDigits(cardNumber)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(setCardNumber(e.target.value))
                }}
            />
            <div className="flex flex-row justify-end mt-6 px-8 gap-2">
                <Button to="/" label="Continue shopping"/>
                <Button
                    to="/success"
                    label="Checkout"
                    disabled={!basket.length || !isSixteenDigits(cardNumber)}
                />
            </div>
        </>
    }

    return displayCheckout()
}
export default Checkout