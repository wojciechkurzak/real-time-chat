import { useContext } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import defaulticon from '../../images/defaulticon.png'

const DisplayUser = ({users}: {users: any}) => {
    const currentUser = useContext(AuthContext)

    return (
        <>
            {(users) !== null ? 
                <div className='user'>
                    <img src={users[currentUser.uid].imageURL === "" ? defaulticon : users[currentUser.uid].imageURL} alt="userIcon" />
                    <span>{users[currentUser.uid].displayName}</span>
                </div> : null }
        </>
    )
}

export default DisplayUser