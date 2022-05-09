import React from 'react'
import { useNavigate } from 'react-router'

const FormRedirect = ({children, path}: {[key: string]: string}) => {
    const navigate = useNavigate()

    return (
        <span onClick={() => navigate(path)}>{children}</span>
    )
}

export default FormRedirect