import send from '../image/main-icon/send.svg'
import receive from '../image/main-icon/receive.svg'
import scan from '../image/main-icon/scan.svg'
import history from '../image/main-icon/history.svg'
import BTC from '../image/main-icon/BTC-icon.png'
import LTC from '../image/main-icon/LTC-icon.png'
import ETH from '../image/main-icon/ETH-icon.png'
import DOGE from '../image/main-icon/DOGE-icon.png'
import wallet from '../image/footer-icon/wallet-footer-icon.svg'
import search from '../image/footer-icon/search-footer-icon.svg'
import NFTs from '../image/footer-icon/NFTs-footer-icon.svg'
import stats from '../image/footer-icon/stats-footer-icon.svg'
import profile from '../image/footer-icon/profile-footer-icon.svg'

export const coinsList = [
    {
        number: 1,
        icon: BTC,
        currency: '35,908 BTC',
        totalCost: '$5,348,156,547',
        costOne: '$20,556,2',
        costСhange: '+4.45%'
    },
    {
        number: 2,
        icon: ETH,
        currency: '33,790 ETH',
        totalCost: '$3,578,425,412',
        costOne: '$11,21',
        costСhange: '+1.81%'
    },
    {
        number: 3,
        icon: LTC,
        currency: '11,981 LTC',
        totalCost: '$2,721,989,499',
        costOne: '$52.94',
        costСhange: '-3.14%'
    },
    {
        number: 4,
        icon: DOGE,
        currency: '655 DOGE',
        totalCost: '$1,026,291,589',
        costOne: '$1,128,18',
        costСhange: '-8.85%'
    },
]

export const walletHelpPoints = [
    {
        number: 1,
        image: send,
        text: 'Send'
    },
    {
        number: 2,
        image: receive,
        text: 'Receive'
    },
    {
        number: 3,
        image: scan,
        text: 'Scan'
    },
    {
        number: 4, 
        image: history,
        text: 'History'
    },
]

export const footerNav = [
    {
        number: 1,
        icon: wallet,
        text: 'Wallet'
    },
    {
        number: 2,
        icon: search,
        text: 'Search'
    },
    {
        number: 3,
        icon: NFTs,
        text: 'NFTs'
    },
    {
        number: 4,
        icon: stats,
        text: 'Stats'
    },
    {
        number: 5,
        icon: profile,
        text: 'Profile'
    },
]

