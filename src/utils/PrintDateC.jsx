import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import Loading from "../components/Loading";

const PrintDateC = ({tableC}) => {
    const [tablet, setTablet] = useState()
    const [loading, setLoading] = useState(false)
    const API = process.env.REACT_APP_API;
    useEffect(() => {
        consumeApi(tableC)
    }, [tableC])
    const consumeApi = async(namer) => {
        setLoading(true)
        try {
            const res = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${(namer)? namer : '0x5c0db99e9B4BAcD45DF713FA0e8843664A8f9F25'}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=${API}`)
            const dat = await res.json()
            const data = dat.result
            if(dat.message === 'OK'){
                return setTablet(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if(loading){
        return <Loading/>
    }
    
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
        data={tablet}
        pagination
    >
    </DataTable>
  )
}

export default PrintDateC