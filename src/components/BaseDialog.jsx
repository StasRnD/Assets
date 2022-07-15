import { useState } from 'react';
import { formatter } from '../utils/formater';

export const BaseDialog = ({
  coins,
  updateCoins,
  currentDialogType,
  openDialog,
}) => {
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState('BTC');

  const changeValue = (evt) => {
    setValue(evt.target.value);
  };

  const result = value * coins.find((coin) => coin.id === currency).rate;

  const closeForm = () => openDialog(null);

  const changeAmountCoin = (coin) => {
    const newCoin = coin;
    currentDialogType === 'Send'
      ? (newCoin.amount -= Number(value))
      : (newCoin.amount += Number(value));

    return newCoin;
  };
  const makeDeal = (evt) => {
    evt.preventDefault();
    updateCoins(
      coins.map((coin) =>
        coin.id === currency ? changeAmountCoin(coin) : coin
      )
    );
    openDialog(null);
  };

  const changeCurrency = (evt) => {
    setCurrency(evt.target.value);
  };

  return (
    <div className='formManagmentCurrencyContainer'>
      <form className='formManagmentCurrency' onSubmit={makeDeal}>
        <div className='formManagmentCurrency__head'>
          <legend className='formManagmentCurrency__title'>
            {currentDialogType}
          </legend>
          <button
            className='formManagmentCurrency__close'
            onClick={closeForm}
          ></button>
        </div>
        <fieldset className='formManagmentCurrency__field'>
          <label
            className='formManagmentCurrency__label'
            htmlFor='currency'
            name='currency'
          >
            Currency
          </label>
          <select
            name='currency'
            id=''
            className='formManagmentCurrency__select'
            onChange={changeCurrency}
            value={currency}
          >
            <option hidden>Выберете валюту</option>
            <option>BTC</option>
            <option>ETH</option>
            <option>LTC</option>
            <option>DOGE</option>
          </select>
        </fieldset>
        <fieldset className='formManagmentCurrency__field'>
          <label
            className='formManagmentCurrency__label'
            htmlFor='value'
            name='value'
          >
            Value
          </label>
          <input
            className='formManagmentCurrency__input'
            type='number'
            name='value'
            value={value}
            onChange={changeValue}
            required
          />
        </fieldset>
        <button type='submit' className='formManagmentCurrency__button'>
          {currentDialogType}&nbsp;
          {formatter.format(result)}
        </button>
      </form>
    </div>
  );
};
