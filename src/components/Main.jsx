import { coinsList } from '../utils/constans'
import walletChoiceIcon from '../image/main-icon/wallet-choice-button.svg'
import walletAnalysisIcon from '../image/main-icon/wallet-analysis-icon.svg'
import send from '../image/main-icon/send.svg'
import receive from '../image/main-icon/receive.svg'
import scan from '../image/main-icon/scan.svg'
import history from '../image/main-icon/history.svg'
import { Coin } from './Coin'

const Main = ({isForm, setIsForm, setTitleForm}) => {
    const importTokenClick = evt => evt.preventDefault()

    const openForm = (evt) => {
        setTitleForm(evt.currentTarget.textContent)
        setIsForm(!isForm)
    }
    
    return (
        <main className='main'>
            <section className='wallet'>
                <div className='wallet__info'>
                    <div className='wallet__active'>
                        <p className='wallet__connect'>Connect wallet -</p>
                        <button className='wallet__choice'>
                            <h2 className='wallet__title'>Metamask</h2>
                            <img src={walletChoiceIcon} alt='Иконка кнопки выбор кошелька' className='wallet__choice-icon'/>
                        </button>
                    </div>
                    <button className='wallet__analysis'>
                        <img src={walletAnalysisIcon} alt='Иконка кнопки анализ кошелька' className='walletAnalysisIcon'/>
                        <p className='wallet__analysis-numbers'>0x59485…82590</p>
                    </button>
                </div>
                <p className='wallet__money'>$645,231,123</p>
                <div className='wallet__help'>
                    <button className='wallet__help-point' onClick={openForm}>
                        <img src={send} alt='Купить валюту' className='wallet__point-icon' />
                        Send
                    </button>
                    <button className='wallet__help-point' onClick={openForm}>
                        <img src={receive} alt='Купить валюту' className='wallet__point-icon' />
                        Receive
                    </button>
                    <button className='wallet__help-point'>
                        <img src={scan} alt='Сканировать' className='wallet__point-icon' />
                        Scan
                    </button>
                    <button className='wallet__help-point'>
                        <img src={history} alt='История' className='wallet__point-icon' />
                        History
                    </button>
                    
                </div>
            </section>
            <section className='coins'>
                <ul className='coins__classify'>
                    <li>
                        <button className='coins__name'>Coins</button>
                    </li>
                    <li>
                        <button className='coins__name'>NFTs</button>
                    </li>
                    <li>
                        <button className='coins__name'>DeFi</button>
                    </li>
                </ul>
                <table className='coins__list'>
                    <thead>
                        {coinsList.map((dataCoin) => {
                            
                            return (
                                <Coin key={dataCoin.number} dataCoin={dataCoin}/>
                            )
                        })}
                    </thead>
                </table>
                <div className='coins__token'>
                    <p className='coins__token-text'>Don't see your token?</p>
                    <a href='#' className='coins__token-import' onClick={importTokenClick}>Import Tokens</a>
                </div>
            </section>
        </main>
    )
}

export default Main