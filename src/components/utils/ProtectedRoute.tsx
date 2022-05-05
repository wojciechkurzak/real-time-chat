import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    const currentUser = useContext(AuthContext)

    if(!currentUser){
        return <Navigate to='/login' replace />
    }

    return children
}

export default ProtectedRoute
