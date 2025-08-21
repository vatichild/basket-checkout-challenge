import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetBasket } from "../store/basketSlice"
import Button from "../components/base/Button"
const Success = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetBasket())
    })
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl text-gray-500 mb-5">Your purchase was successful!</div>
            <div>
                <Button to="/" label="Continue shopping" />
            </div>
        </div>
    )
}

export default Success