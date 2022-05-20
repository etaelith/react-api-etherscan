import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const API = process.env.REACT_APP_API;
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loadingFetch, setLoadingFetch] = useState(false)
    useEffect(() => {
        setLoadingFetch(true)
        fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${(url)?url:'0x5c0db99e9B4BAcD45DF713FA0e8843664A8f9F25'}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=${API}`)
            .then(res => res.json())
            .then(data => setData(data.result))
            .catch(e => setError(e))
            .finally(() => setLoadingFetch(false))
    }, [url])

  return {data, error, loadingFetch}
}

