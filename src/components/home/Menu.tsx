import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Menu.scss'
import ChangeUsername from './ChangeUsername'
import ChangePicture from './ChangePicture'
import Signout from './Signout'

const Menu = ({slide, setSlide}: {slide: boolean, setSlide: Function}) => {
    return (
        <div className={slide ? 'menu menuOut' : 'menu'}>
            <div className='menuClose' onClick={() => setSlide(!slide)}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div>
                <ChangePicture />
                <ChangeUsername />
            </div>
            <Signout />
        </div>
    )
}

export default Menu