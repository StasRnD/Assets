import battery from '../image/header-icon/battery.svg'
import wifi from '../image/header-icon/wifi.svg'
import mobileSignal from '../image/header-icon/mobile-signal.svg'

const TopBar = () => {
    return (
        <header className="header">
            <div className="header__time">9:41</div>
            <div className="header__information-panel">
                <img src={mobileSignal} alt="Мобильный сигнал" className="header__mobile-signal" />
                <img src={wifi} alt="Сигнал вай-фая" className="header__wifi" />
                <img src={battery} alt="Заряд батареи" className="header__battery" />
            </div>  
        </header>
    )
}

export default TopBar