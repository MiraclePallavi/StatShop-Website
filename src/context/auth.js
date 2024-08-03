import { useState, useContext, useEffect,createContext} from "react";

const AuthContext = createContext()


const AuthProvider =({Children })=>{
    const [Auth, setAuth] = useState({
        user:null,
        token:" "
    })
    return(
        <AuthContext.Provider value={[Auth, setAuth]}>
            {Children}
        </AuthContext.Provider>
    )
}

//custom hooks
const useAuth = ()=>useContext(AuthContext)

export {useAuth, AuthProvider}