import { RegisterValidator } from '../interfaces/Interfaces'

export const registerInputs: Array<RegisterValidator> = [
    {
        id: 1,
        name: 'email',
        type: 'text',
        label: 'Email',
        errorMessage: 'Incorrect email',
    },
    {
        id: 2,
        name: 'password',
        type: 'password',
        label: 'Password',
        errorMessage: 'Password must have at least 1 uppercase and 1 number',
    },
    {
        id: 3,
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm password',
        errorMessage: 'Passwords are not equal',
    }
]