import { Link } from 'react-router-dom'
import { footerNav } from '../utils/constans'

const BottomBar = () => {
    return (
        <footer className='footer'>
            <div className='footer__nav'>
                {footerNav.map((point) => {
                    return (
                        <Link to={`/${point.text}`} className='footer__nav-link' key={point.number}>
                            <img src={point.icon} alt={`картинка ${point.text}`} className='footer__link-icon' />
                            {point.text}
                        </Link>
                    )
                })}
            </div>
            <div className='footer__scroll'></div>
        </footer>
    )
}

export default BottomBar