const Transaction = ({transaction}) => {

    const {from, gasPrice, gasUsed, timeStamp, value} = transaction
    
    const calcular = gasPrice * gasUsed

    const time = new Date(timeStamp * 1000).toLocaleDateString()
    
    return (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{from}</th>
            <td className="px-6 py-3">input/output</td>
            <td className="px-6 py-3">{calcular / Math.pow(10,18)}</td>
            <td className="px-6 py-3">{time}</td>
            <td className="px-6 py-3 text-right">{value / Math.pow(10,18)}</td>
            <td className="px-6 py-3 text-right"></td>
        </tr>
    </>
    )
}

export default Transaction