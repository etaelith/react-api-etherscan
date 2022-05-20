const TableHead = ({children}) => {
    return (
            <table className="table-auto w-auto mx-auto mt-4 text-xs text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-3 py-3">#</th>
                        <th scope="col" className="px-3 py-3">Method</th>
                        <th scope="col" className="px-3 py-3">Gas Cost</th>
                        <th scope="col" className="px-3 py-3">Date</th>
                        <th scope="col" className="px-3 py-3">Value Eth</th>
                        <th scope="col" className="px-3 py-3">Value USD</th>
                    </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
    )
}

export default TableHead