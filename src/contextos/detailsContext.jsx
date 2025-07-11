import React, {useState, useEffect, createContext, Children} from "react"
import { useParams } from "react-router"
import { getDetailsById } from "../services/detailsServices"

export const detailsContext = createContext({
    details: []
})
const DetailsContextProvider = ({children}) => {
    const {detail_autorId} = useParams()

    const [details, setDetails] = useState([])

    useEffect(() => {
        const detailList = getDetailsById(detail_autorId)
        setDetails(detailList)
    }, [detail_autorId])

    return (
        <detailsContext.Provider
            value={{
                details: details
            }}
        >
            {children}
        </detailsContext.Provider>
    )
} 

export default DetailsContextProvider


