import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import Transaction from '../components/Transaction';

const PrintDate = ({ walletTest} ) => {
    
    const API = process.env.REACT_APP_API;
    
    const [transactionsTest, setTranstactionsTest] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        consumeApi(walletTest)
    },[walletTest]);
    
    const consumeApi = async (walletAddressTest) => {
        setLoading(true)
    try {
            const res = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${(walletAddressTest)?walletAddressTest:'0x5c0db99e9B4BAcD45DF713FA0e8843664A8f9F25'}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=${API}`)
            const datos = await res.json()
            setTranstactionsTest(datos.result)
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
            {
                transactionsTest.map((item) => (
                    <Transaction key={item.hash} transaction={item}/>
                ))
            }
            
        </>
                
  )
}

export default PrintDate