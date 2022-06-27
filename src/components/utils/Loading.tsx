import React from 'react'
import logo from '../../images/logo.svg'
import '../../styles/Loading.scss'

const Loading = () => {
  return (
    <div className='loadingWrapper'>
        <div className='loading' >
            <img src={logo} alt='logo' />
            <p>Loading</p>
        </div>
    </div>
  )
}

export default Loading