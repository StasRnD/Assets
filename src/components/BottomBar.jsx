import { footerNav } from '../utils/constans'

const BottomBar = () => {
    return (
        <footer className='footer'>
            <div className="footer__nav">
                {footerNav.map((point) => {
                    return (
                        <button className="footer__nav-point" key={point.number}>
                            <img src={point.icon} alt={`картинка ${point.text}`} className="footer__point-icon" />
                            <p className="footer__point-text">{point.text}</p>
                        </button>
                    )
                })}
            </div>
            <div className="footer__scroll"></div>
        </footer>
    )
}

export default BottomBar