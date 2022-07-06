

export const Coin = ({ dataCoin }) => {
    
    return (
        <tr className='coins__unit'>
            <td className='coins__currensy'>
                <img src={dataCoin.icon} alt='Логотип валюты' className='coins__icon' />
                    <p className='coins__amout'>{dataCoin.currency}</p>
                    <p className='coins__total-cost'>${dataCoin.totalCost}</p>
            </td>
            <td className='coins__change'>
                <p className='coins__cost-one'>${dataCoin.costOne}</p>
                <p className='coins__cost-change'>{dataCoin.costСhange}%</p>
            </td>
        </tr>
    )
}