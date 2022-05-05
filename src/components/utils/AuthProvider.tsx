import { useState, useEffect, createContext} from 'react'
import { auth } from '../../firebase'

export const AuthContext = createContext(null) 

const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [currentUser, setCurrentUser] = useState<any>(null)

    useEffect((): void => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider