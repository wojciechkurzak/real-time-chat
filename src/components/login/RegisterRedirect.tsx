import React from 'react'
import { useNavigate } from 'react-router'

const RegisterRedirect = ({children}: {children: string}) => {
    const navigate = useNavigate()

    return (
        <span onClick={() => navigate('/register')}>{children}</span>
    )
}

export default RegisterRedirect