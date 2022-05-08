import { BaseSyntheticEvent, useState } from 'react'
import { loginInputs } from './LoginInputs'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import FormInput from '../utils/FormInput'
import { useNavigate } from 'react-router-dom'
import '../../styles/Login.scss'
import FormButton from '../utils/FormButton'


const Login = () => {
    const [values, setValues] = useState<{[key: string]: any}>({
        email:'',
        password: '',
        error: false,
    })

    const navigate = useNavigate()

    const signIn = (): void => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(userCred => {
                navigate('/')
            })
            .catch(err => {
                setValues({
                    email: '',
                    password: '',
                    error: true,
                })
            })
    }

    const handleChange = (e: BaseSyntheticEvent): void => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: BaseSyntheticEvent): void => {
        e.preventDefault()
        signIn()
    }

    return (
        <div className='loginPanel'>
            <form onSubmit={handleSubmit}>
                {values.error && <span>Incorrect email or password</span>}
                {loginInputs.map((input) => <FormInput key={input.id} value={values[input.name]} onChange={handleChange} {...input} />)}
                <FormButton>Login</FormButton>
            </form>
        </div>
    )
}

export default Login