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
        name: 'nickname',
        type: 'text',
        label: 'Nickname',
        errorMessage: 'Nickname must have 3 to 16 letters',
    },
    {
        id: 3,
        name: 'password',
        type: 'password',
        label: 'Password',
        errorMessage: 'Password must have at least 1 uppercase and 1 number',
    },
    {
        id: 4,
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm password',
        errorMessage: 'Passwords are not equal',
    }
]