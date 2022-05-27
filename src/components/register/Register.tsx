import { BaseSyntheticEvent, useState } from 'react'
import { registerInputs } from './RegisterInputs'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../../firebase'
import FormInput from '../utils/FormInput'
import { useNavigate } from 'react-router-dom'
import '../../styles/FormPanel.scss'
import FormButton from '../utils/FormButton'
import FormRedirect from '../utils/FormRedirect'


const Register = () => {
    const [values, setValues] = useState<{[key: string]: any}>({
        email:{
            value: '',
            error: false,
        },
        nickname:{
            value: '',
            error: false,
        },
        password: {
            value: '',
            error: false,
        },
        confirmPassword: {
            value: '',
            error: false,
        },
        error: false,
    })

    const navigate = useNavigate()

    const signUp = (): void => {
        createUserWithEmailAndPassword(auth, values.email.value, values.password.value)
            .then(async userCred => {
                await setDoc(doc(db, 'users', userCred.user.uid), {
                    displayName: values.nickname.value,
                    imageURL: ''
                })
                return userCred
            })
            .then(userCred => {
                updateProfile(userCred.user, {
                    displayName: values.nickname.value
                })
                .then(() => {
                    navigate('/')
                })
                .catch(err => {
                    throw err
                })
            })
            .catch(err => {
                setValues({
                    email: {
                        value: '',
                        error: false
                    },
                    nickname: {
                        value: '',
                        error: false
                    },
                    password: {
                        value: '',
                        error: false
                    },
                    confirmPassword: {
                        value: '',
                        error: false
                    },
                    error: true
                })
            })
    }

    const handleChange = (e: BaseSyntheticEvent): void => {
        setValues({
            ...values, 
            [e.target.name]: {
                ...values[e.target.name],
                value: e.target.value,
            }
        })
    }

    const handleSubmit = (e: BaseSyntheticEvent): void => {
        e.preventDefault()
        const emailRegex =  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}/
        const nicknameRegex = /^[a-zA-Z0-9]{3,16}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/

        if(emailRegex.test(values.email.value) 
            && passwordRegex.test(values.password.value) 
            && values.confirmPassword.value === values.password.value
            && nicknameRegex.test(values.nickname.value)){
            signUp()
        }
        else{
            setValues({
                email: {
                    ...values.email,
                    error: !emailRegex.test(values.email.value)
                },
                nickname: {
                    ...values.nickname,
                    error: !nicknameRegex.test(values.nickname.value)
                },
                password: {
                    ...values.password,
                    error: !passwordRegex.test(values.password.value)
                },
                confirmPassword: {
                    ...values.confirmPassword,
                    error: values.confirmPassword.value === values.password.value ? false : true
                },
                error: false
            })
        }
        
    }

    return (
        <div className='formPanel'>
            <form onSubmit={handleSubmit}>
                {values.error && <span>Email already taken</span>}
                {registerInputs.map((input) => 
                                        <FormInput 
                                            key={input.id} 
                                            value={values[input.name].value} 
                                            error={values[input.name].error} 
                                            onChange={handleChange} 
                                            {...input} 
                                        />
                                    )}
                <FormButton>Register</FormButton>
                <FormRedirect path='/login'>I already have an account</FormRedirect>
            </form>
        </div>
    )
}

export default Register