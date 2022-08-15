import { useState } from "react";
import { createContext } from "react";


export const GlobalHelperContext = createContext()

export const GlobalHelperProvider = ({ children }) => {

    const [sideNavOpen, setSideNavOpen] = useState(true)

    const value = {
        sideNavOpen, setSideNavOpen
    }

    return (
        <GlobalHelperContext.Provider value={value}>
            {children}
        </GlobalHelperContext.Provider>
    )
}

export default GlobalHelperProvider