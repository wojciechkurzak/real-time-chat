import { BaseSyntheticEvent, useState } from 'react'
import { loginInputs } from './LoginInputs'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import Input from '../utils/Input'


const Login = ({setUser}: any) => {
    const [values, setValues] = useState<{[key: string]: any}>({
        email:'',
        password: '',
        error: false,
    })

    const signIn = (): void => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(userCred => {
                setUser(userCred)
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
        <form onSubmit={handleSubmit}>
            {values.error && <span>Incorrect email or password</span>}
            {loginInputs.map((input) => <Input key={input.id} value={values[input.name]} onChange={handleChange} {...input} />)}
            <button>Login</button>
        </form>
    )
}

export default Login