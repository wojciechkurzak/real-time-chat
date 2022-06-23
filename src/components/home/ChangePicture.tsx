import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { BaseSyntheticEvent, useContext, useState } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import defaulticon from '../../images/defaulticon.png'
import { updateDoc, doc } from "firebase/firestore";
import { auth, db } from '../../firebase'
import '../../styles/ChangePicture.scss'
import { updateProfile } from "firebase/auth";

const ChangePicture = () => {
    const currentUser = useContext(AuthContext)

    const [imageURL, setImageURL] = useState(currentUser.photoURL)
    const [file, setFile] = useState(null)

    console.log('render')

    const handleChange = (e: BaseSyntheticEvent): void => {
        if(e.target.files.length !== 0){
            setFile(e.target.files[0])
            setImageURL(URL.createObjectURL(e.target.files[0]))
            e.target.value = ''
        }
    }

    const handleSubmit = (e: BaseSyntheticEvent): void => {
        e.preventDefault()
        
        const storage = getStorage()
        const storageRef = ref(storage, `images/${currentUser.uid}`);

        uploadBytes(storageRef, file).then((snapshot) => {
            return getDownloadURL(snapshot.ref)
        }).then(async downloadURL => {
            await updateDoc(doc(db, 'users', currentUser.uid), {
                imageURL: downloadURL
            })
            updateProfile(auth.currentUser, {
                photoURL: downloadURL
            }).then(() => {
                setImageURL(downloadURL)
            })
        });
    }

    const cancelEdit = (): void => {
        setFile(null)
        setImageURL(currentUser.photoURL)
    }

    return (
        <div className='changePicture'>
            <form onSubmit={handleSubmit}>
                    <label>
                        <input type='file' accept='image/png, image/jpeg' onChange={handleChange}></input>
                        <FontAwesomeIcon icon={faFileImage} />
                    </label>
                    <img src={imageURL == null? defaulticon : imageURL} alt='userPicture' />
                    {currentUser.photoURL !== imageURL ? 
                        <div className='buttons'>
                            <button className='save' type='submit'>Save</button>
                            <button className='cancel' onClick={cancelEdit}>Cancel</button>
                        </div> : null}
            </form>
        </div>
    )
}

export default ChangePicture