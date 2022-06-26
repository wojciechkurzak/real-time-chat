import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Signout.scss'

const Signout = () => {
    const navigate = useNavigate()

    const signout = ():void => {
        signOut(auth).then(() => {
            navigate('/login')
        }).catch((err) => {
            alert("Error, couldn't sign out, try again")
        })
    }

    return (
        <div className='signout' onClick={signout}>Signout<FontAwesomeIcon icon={faArrowRightFromBracket} /></div>
    )
}

export default Signout