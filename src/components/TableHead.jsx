const TableHead = ({children}) => {
    return (
        <div className="relative overflow-x-auto mx-10 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Method</th>
                        <th scope="col" className="px-6 py-3">Gas Cost</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Value Eth</th>
                        <th scope="col" className="px-6 py-3">Value USD</th>
                    </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
        </div>
    )
}

export default TableHead