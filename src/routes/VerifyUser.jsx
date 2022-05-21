import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import Loading from "../components/Loading"


const VerifyUser = ({children}) => {

    const {user} = useContext(UserContext)

    if(!user){
        return <Loading/>
    }
  return children
}

export default VerifyUser