import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
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
        <div className='signout' onClick={signout}>Signout</div>
    )
}

export default Signout