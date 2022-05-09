export interface LoginValidator {
    id: number,
    name: string,
    type: string,
    label: string,
    required: boolean,
}

export interface RegisterValidator {
    id: number,
    name: string,
    type: string,
    label: string,
    required: boolean,
    pattern: string,
    errorMessage: string,
}