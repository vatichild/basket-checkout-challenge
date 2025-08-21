const DataTable = ({ children }: { children: React.ReactNode }) => {
    return (
        <table className="w-full text-center table-fixed">
            <thead>
            <tr className="bg-gray-100 border-b border-gray-200 uppercase">
                <th className="w-1/5 py-2">Product Name</th>
                <th className="w-1/5 py-2">Selected Quantity</th>
                <th className="w-1/5 py-2">Unit Price</th>
                <th className="w-1/5 py-2">Total Price</th>
                <th className="w-1/5 py-2"></th>
            </tr>
            </thead>
            <tbody className="text-xs">{children}</tbody>
        </table>
    )
}
export default DataTable