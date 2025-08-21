import type {ChangeEvent} from "react"

const Quantity = ({stock, selected, onChange}: {
    stock: number
    selected: number
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) => {
    return (
        <select
            name="choice"
            onChange={onChange}
            defaultValue={selected}>
            {Array(stock)
                .fill(0)
                .map((_, i) => {
                    const value = i + 1
                    return (
                        <option
                            value={value}
                            key={i}>
                            {value}
                        </option>
                    )
                })}
        </select>
    )
}

export default Quantity