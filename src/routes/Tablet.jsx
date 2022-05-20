import {useEffect, useState} from 'react'
import DataTable, {createTheme} from 'react-data-table-component'

const Tablet = () => {
    const API = process.env.REACT_APP_API;
    const [users, setUsers] = useState()
    const URL = `https://api.etherscan.io/api?module=account&action=txlist&address=0x5c0db99e9B4BAcD45DF713FA0e8843664A8f9F25&startblock=0&endblock=99999999&page=1&sort=asc&apikey=${API}`

    const showData = async() => {
       const res = await fetch(URL)
       const datas = await res.json()
       const data = datas.result
       setUsers(data)
       console.log(data)
    }
    useEffect(() => {
        showData()
    }, [])

    const columns = [
        {
            name: 'HASH',
            selector: row => row.hash
        },
        {
            name: 'TIMESTAMP',
            selector: row => row.timeStamp
        },
        {
            name: 'GAS',
            selector: row => row.gas
        },
    ]
    return (
        
            <DataTable
                columns={columns}
                data={users}
                pagination
                >
            </DataTable>
       
    )
}

export default Tablet