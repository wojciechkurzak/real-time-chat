import { useState, useEffect, createContext} from 'react'
import { auth } from '../../firebase'

export const AuthContext = createContext(null) 

const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [currentUser, setCurrentUser] = useState<any>(null)
    const [pending, setPending] = useState(true)

    useEffect((): void => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setPending(false)
        })
    }, [])

    if(pending){
        return null
    }

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider