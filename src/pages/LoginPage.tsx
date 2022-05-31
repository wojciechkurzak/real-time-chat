import Login from '../components/login/Login'
import imageBottom from '../images/stain-bottom.svg'
import imageTop from '../images/stain-top.svg'
import '../styles/FormPage.scss'

const LoginPage = () => {
    return (
        <div className='formPage'>
            <img className='imageBottom' src={imageBottom} alt='loginimage'></img>
            <img className='imageTop' src={imageTop} alt='loginimage'></img>
            <Login />
        </div>
    )
}

export default LoginPage