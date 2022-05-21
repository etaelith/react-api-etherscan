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
            name: 'From',
            selector: row => row.from,
            sortable: true
        },
        {
            name: 'Method',
            selector: (row) => (row.from === tableC.toLowerCase()) ? 'output' : 'input',
            sortable: true
        },
        {
            name: 'Gas Cost',
            selector: row => (row.gasPrice * row.gasUsed) / Math.pow(10,18),
            sortable: true
        },
        {
            name: 'Date',
            selector: row => new Date(row.timeStamp *1000).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Value Eth',
            selector: row => row.value / Math.pow(10,18),
            sortable: true
        },
    ]
  return (
    <DataTable
        columns={columns}
        data={tablet}
        selectableRows
        pagination
    >
    </DataTable>
  )
}

export default PrintDateC