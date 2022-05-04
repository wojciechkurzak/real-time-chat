import { LoginValidator } from '../interfaces/Interfaces'

export const loginInputs: Array<LoginValidator> = [
    {
        id: 1,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        label: 'Email',
        required: true,
    },
    {
        id: 2,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        label: 'Password',
        required: true,
    }
]