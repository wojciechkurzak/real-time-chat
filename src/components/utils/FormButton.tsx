import React from 'react'
import '../../styles/FormButton.scss'

const FormButton = ({children}: {children: string}) => {
    return (
        <button className='formButton' type='submit'>{children}</button>
    )
}

export default FormButton