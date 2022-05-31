import { BaseSyntheticEvent, useState } from 'react'
import { registerInputs } from './RegisterInputs'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, getDocs, setDoc, writeBatch } from "firebase/firestore"; 
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
        username:{
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
        emailError: false,
        usernameError: false
    })

    const navigate = useNavigate()

    const signUp = (): void => {
        createUserWithEmailAndPassword(auth, values.email.value, values.password.value)
            .then(async userCred => {
                const batch = writeBatch(db)
                batch.set(doc(db, 'users', userCred.user.uid), {
                    displayName: values.username.value,
                    imageURL: ''
                })
                batch.set(doc(db, 'usernames', values.username.value), {})
                await batch.commit()
                return userCred
            })
            .then(userCred => {
                updateProfile(userCred.user, {
                    displayName: values.username.value
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
                    username: {
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
                    emailError: true,
                    usernameError: false
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

    const handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {
        e.preventDefault()
        const emailRegex =  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}/
        const usernameRegex = /^[a-zA-Z0-9]{3,16}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\d@$!%*#?&-^_]{6,}$/

        if(emailRegex.test(values.email.value) 
            && passwordRegex.test(values.password.value) 
            && values.confirmPassword.value === values.password.value
            && usernameRegex.test(values.username.value)){
                const usernamesSnap = await getDocs(collection(db, 'usernames'))
                let isValid: boolean = true

                usernamesSnap.forEach((doc) => {
                    if(doc.id.toLowerCase() === values.username.value.toLowerCase()){
                        isValid = false
                    }
                })
                
                if(isValid){
                    signUp()
                }
                else{
                    setValues({
                        email: {
                            value: '',
                            error: false
                        },
                        username: {
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
                        emailError: false,
                        usernameError: true
                    })
                }
                
        }
        else{
            setValues({
                email: {
                    ...values.email,
                    error: !emailRegex.test(values.email.value)
                },
                username: {
                    ...values.username,
                    error: !usernameRegex.test(values.username.value)
                },
                password: {
                    ...values.password,
                    error: !passwordRegex.test(values.password.value)
                },
                confirmPassword: {
                    ...values.confirmPassword,
                    error: values.confirmPassword.value === values.password.value ? false : true
                },
                emailError: false,
                usernameError: false
            })
        }
        
    }

    return (
        <div className='formPanel'>
            <form onSubmit={handleSubmit}>
                {values.emailError && <span>Email already taken</span>}
                {values.usernameError && <span>Username already taken</span>}
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