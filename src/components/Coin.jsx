import { formatter, language } from '../utils/formater';

export const Coin = ({ dataCoin }) => {
  const changeAmountPercent = (defaultCurrency) => {
    const newCurrency = dataCoin.amount * dataCoin.rate;
    const perCent = (
      ((newCurrency - defaultCurrency) / defaultCurrency) *
      100
    ).toFixed(2);
    return perCent > 0 ? `+${perCent}` : perCent;
  };

  return (
    <tr className='coins__unit'>
      <td className='coins__currensy'>
        {/* <img src={dataCoin.icon} alt='Логотип валюты' className='coins__icon' /> */}
        <p className='coins__amout'>
          {dataCoin.amount.toLocaleString(language)} {dataCoin.id}
        </p>
        <p className='coins__total-cost'>
          {formatter.format(dataCoin.amount * dataCoin.rate)}
        </p>
      </td>
      <td className='coins__change'>
        <p className='coins__cost-one'>{formatter.format(dataCoin.rate)}</p>
        <p
          className={`coins__cost-change ${
            changeAmountPercent(dataCoin.defaultCurrency) >= 0
              ? 'coins__cost-change_positive'
              : 'coins__cost-change_negative'
          }`}
        >
          %{changeAmountPercent(dataCoin.defaultCurrency)}
        </p>
      </td>
    </tr>
  );
};
