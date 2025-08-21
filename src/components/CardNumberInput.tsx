import type {ChangeEvent} from "react"

const CardNumberInput = ({
                             defaultValue,
                             isValid,
                             onChange,
                         }: {
    defaultValue: string
    isValid: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-12">
            <div>
                <div className="flex justify-between">
                    <label>Input Your Card Number</label>
                    <small>{defaultValue.length}/16</small>
                </div>
                <input
                    value={defaultValue}
                    maxLength={16}
                    onChange={onChange}
                    className={`w-full p-2 border rounded border-gray-400  ${
                        defaultValue.length !== 0 &&
                        isValid &&
                        "outline-green-500 border-green-500"
                    }`}
                    type="text"
                />
                <small>
                    <i>16 digits card number</i>
                </small>
            </div>
        </div>
    )
}

export default CardNumberInput