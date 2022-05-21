import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import PrintDateC from "../utils/PrintDateC"
import Loading from "./Loading"


const VerifyUser = ({tableC}) => {

    const {user} = useContext(UserContext)

    if(!user){
        return <Loading/>
    }
  return (
    <PrintDateC tableC={tableC}/>
  )
}

export default VerifyUser