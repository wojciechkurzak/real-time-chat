import { BaseSyntheticEvent, useState } from 'react'
import { loginInputs } from './LoginInputs'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import FormInput from '../utils/FormInput'
import { useNavigate } from 'react-router-dom'
import '../../styles/FormPanel.scss'
import FormButton from '../utils/FormButton'
import FormRedirect from '../utils/FormRedirect'


const Login = () => {
    const [values, setValues] = useState<{[key: string]: any}>({
        email: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        },
        error: false,
    })

    const navigate = useNavigate()

    const signIn = (): void => {
        signInWithEmailAndPassword(auth, values.email.value, values.password.value)
            .then(userCred => {
                navigate('/')
            })
            .catch(err => {
                setValues({
                    email: {
                        value: '',
                        error: false
                    },
                    password: {
                        value: '',
                        error: false
                    },
                    error: true,
                })
            })
    }

    const handleChange = (e: BaseSyntheticEvent): void => {
        setValues({
            ...values, 
            [e.target.name]: {
                ...e.target.name,
                value: e.target.value
            }
        })
    }

    const handleSubmit = (e: BaseSyntheticEvent): void => {
        e.preventDefault()
        if(values.email.value.length !== 0 && values.password.value.length !== 0){
            signIn()
        }
        else{
            setValues({
                email: {
                    ...values.email,
                    error: values.email.value.length === 0 ? true : false
                },
                password: {
                    ...values.password,
                    error: values.password.value.length === 0 ? true : false
                },
                error: false,
            })
        }
        
    }

    return (
        <div className='formPanel'>
            <form onSubmit={handleSubmit}>
                {values.error && <span>Incorrect email or password</span>}
                {loginInputs.map((input) => 
                                    <FormInput 
                                        key={input.id} 
                                        value={values[input.name].value} 
                                        error={values[input.name].error}
                                        onChange={handleChange} 
                                        {...input} 
                                    />
                                )}
                <FormButton>Login</FormButton>
                <FormRedirect path='/register'>Create new account</FormRedirect>
            </form>
        </div>
    )
}

export default Login