import React, {useState, createContext} from "react";

export const homeContext = createContext({
    addYourName: (user_name) => {}
})

const HomeContextProvider = ({children}) => {

    const [userName, setUserName] = useState('')

    const addYourName = (user_name) => {
        setUserName(user_name)
    }


    return(
        <homeContext.Provider
            value={{
                addYourName: addYourName,
                userName: userName
            }}
        >
            {children}
        </homeContext.Provider>
    )
}
export default HomeContextProvider