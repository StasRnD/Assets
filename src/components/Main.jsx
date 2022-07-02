import { walletHelpPoints, coinsList } from '../utils/constans'
import message from '../image/main-icon/message-chat.svg'
import setting from '../image/main-icon/setting.svg'

const Main = () => {
    const importTokenClick = evt => evt.preventDefault()
    
    return (
        <main className="main">
            <div className="main__nav">
                <h1 className="main__title">Assets Manage</h1>
                <div className="main__help">
                    <img src={message} alt="Написать сообщение" className="main__help-icon" />
                    <img src={setting} alt="Настройки" className="main__help-icon" />
                </div>
            </div>
            <section className="wallet">
                <div className="wallet__info">
                    <div className="wallet__active">
                        <p className="wallet__connect">Connect wallet -</p>
                        <h2 className="wallet__title">&nbsp;Metamask</h2>
                        <button className="wallet__choice"></button>
                    </div>
                    <div className="wallet__analysis">
                        <button className="wallet__analysis-icon" />
                        <p className="wallet__analysis-numbers">0x59485…82590</p>
                    </div>
                </div>
                <p className="wallet__money">$635,285,84</p>
                <div className="wallet__help">
                    {walletHelpPoints.map((point) => {
                        return (
                            <div className="wallet__help-point" key={point.number}>
                                <img src={point.image} alt="" className="wallet__point-icon" />
                                <p className="wallet__point-text">{point.text}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="coins">
                <div className="coins__classify">
                    <button className="coins__name">Coins</button>
                    <button className="coins__name">NFTs</button>
                    <button className="coins__name">DeFi</button>
                </div>
                <ul className="coins__list">
                    {coinsList.map((coin) => {
                        return (
                            <li className="coins__unit" key={coin.number}>
                                <div className="coins__currensy">
                                    <img src={coin.icon} alt="Логотип валюты" className="coins__icon" />
                                    <p className="coins__amout">{coin.currency}</p>
                                    <p className="coins__total-cost">{coin.totalCost}</p>
                                </div>
                                <div className="coins__change">
                                    <p className="coins__cost-one">{coin.costOne}</p>
                                    <p className="coins__cost-change">{coin.costСhange}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="coins__token">
                    <p className="coins__token-text">Don't see your token?</p>
                    <a href="#" className="coins__token-import" onClick={importTokenClick}>Import Tokens</a>
                </div>
            </section>
        </main>
    )
}

export default Main