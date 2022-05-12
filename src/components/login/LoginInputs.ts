import { LoginValidator } from '../interfaces/Interfaces'

export const loginInputs: Array<LoginValidator> = [
    {
        id: 1,
        name: 'email',
        type: 'text',
        label: 'Email',
        errorMessage: 'Email cannot be empty'
    },
    {
        id: 2,
        name: 'password',
        type: 'password',
        label: 'Password',
        errorMessage: 'Password cannot be empty'
    }
]