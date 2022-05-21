import { useEffect, useState } from "react";

import Loading from "../components/Loading";

import Transaction from '../routes/Transaction';

const PrintDate = ({ walletTest } ) => {
    
    const API = process.env.REACT_APP_API;
    
    const [transactionsTest, setTranstactionsTest] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        consumeApi(walletTest)
    },[walletTest]);
    
    const consumeApi = async (walletTest) => {
        setLoading(true)
    try {
            const res = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${(walletTest)?walletTest:'0x5c0db99e9B4BAcD45DF713FA0e8843664A8f9F25'}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=${API}`)
            const datos = await res.json()
            if(datos.message === 'OK'){
                return setTranstactionsTest(datos.result)
            }
            alert(datos.result)
            console.log(datos)
        } catch(err){
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    if(loading){
        return <Loading/>
    }

  return (
        <>  
            <table className="table-auto w-auto mx-auto mt-4 text-xs text-left text-gray-500 dark:text-gray-400 ">
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
                    {
                        transactionsTest.map((item) => (
                            <Transaction key={item.hash} transaction={item}/>
                        ))
                    }
                </tbody>
            </table>
        </>            
    )
}

export default PrintDate

/* Change */

/*
import { useFetch } from "../hooks/useFetch";
const {data, error, loadingFetch} = useFetch(walletTest)
    if(loadingFetch){
        return <Loading/>
    }
    if(data.message === 'OK'){
        return setTranstactionsTest(data.result)
    } else {
        alert(data.result)
    }
*/