import imageBottom from '../images/stain-bottom.svg'
import imageTop from '../images/stain-top.svg'
import '../styles/ErrorPage.scss'

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <img className='imageBottom' src={imageBottom} alt='loginimage'></img>
            <img className='imageTop' src={imageTop}alt='loginimage'></img>
            <div className='error'>
                <h1>404</h1>
                <p>Not found</p>
            </div>
        </div>
    )
}

export default ErrorPage