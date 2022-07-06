const FormManagmentCurrency = ({titleForm}) => {
    
    return (
        <div className='formManagmentCurrencyContainer'>
            <form className='formManagmentCurrency'>
                <div className='formManagmentCurrency__head'>
                    <legend className='formManagmentCurrency__title'>{titleForm}</legend>
                    <button className='formManagmentCurrency__close'></button>
                </div>
                <fieldset className='formManagmentCurrency__field'>
                    <label className='formManagmentCurrency__label' htmlFor='currency' name='currency'>Currency</label>
                    <select name='currency' id='' className='formManagmentCurrency__select'>
                        <option value='BTC'>BTC</option>
                        <option value='FIG'>FIG</option>
                        <option value='qwe'>qwe</option>
                        <option value='123'>123</option>
                    </select>

                </fieldset>
                <fieldset className='formManagmentCurrency__field'>
                    <label className='formManagmentCurrency__label' htmlFor='value' name='value'>Value</label>
                    <input className='formManagmentCurrency__input' type='text' name='value' value='BTC'></input>
                </fieldset>
                <button className='formManagmentCurrency__button'>{titleForm}</button>
            </form>
        </div>
    )
}
export default FormManagmentCurrency