import DisplayUser from './DisplayUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Navigation.scss'

const Navigation = ({slide, setSlide, users}: {slide: boolean, setSlide: Function, users: Array<any>}) => {
    return (
        <nav className='navigation'>
            <DisplayUser users={users} />
            <div className='menuIcon' onClick={() => setSlide(!slide)}>
                <FontAwesomeIcon icon={faGear} />
            </div>
        </nav>
    )
}

export default Navigation