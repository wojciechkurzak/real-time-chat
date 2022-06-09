import { BaseSyntheticEvent, useContext, useState } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import '../../styles/ChangeUsername.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { updateProfile } from 'firebase/auth'

const ChangeUsername = () => {
    const currentUser = useContext(AuthContext)

    const [value, setValue] = useState(currentUser.displayName)
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(null)

    const cancelEdit = (): void => {
        setEdit(false)
        setValue(currentUser.displayName)
        setError(null)
    }

    const handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {
        e.preventDefault()
        const usernameRegex = /^[a-zA-Z0-9]{3,16}$/

        if(usernameRegex.test(value)){
            const usernamesSnap = await getDocs(collection(db, 'usernames'))
            let isValid: boolean = true

            usernamesSnap.forEach((doc) => {
                if(doc.id.toLowerCase() === value.toLowerCase()){
                    isValid = false
                }
            })

            if(isValid){
                const batch = writeBatch(db)
                batch.update(doc(db, 'users', currentUser.uid), {
                    displayName: value,
                })
                batch.set(doc(db, 'usernames', value), {})
                batch.delete(doc(db, 'usernames', currentUser.displayName))

                await batch.commit()

                updateProfile(auth.currentUser, {
                    displayName: value
                }).then(() => {
                    setError(null)
                    setEdit(false)
                })
            }

            else{
                setError('Username already taken')
            }
        }

        else{
            setError('Invalid username')
        }
        
    }

    return (
        <div className='changeUsername'>
            <form onSubmit={handleSubmit}>
                    <span>{error}</span>
                    <input type='text' onChange={(e) => setValue(e.target.value)} value={value} disabled={!edit}></input>
                    {!edit && <FontAwesomeIcon icon={faPenToSquare} onClick={() => setEdit(true)}/>}
                    {edit && <div className='buttons'>
                        <button className='save' type='submit'>Save</button>
                        <button className='cancel' onClick={cancelEdit}>Cancel</button>
                    </div>}
            </form>
        </div>
    )
}

export default ChangeUsername