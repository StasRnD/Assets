import '../index.css'
import { useState } from 'react'
import Header from './Header'
import Main from './Main'
import BottomBar from './BottomBar'
import FormManagmentCurrency from './FormManagmentCurrency'

const App = () => {
  const [isForm, setIsForm] = useState(false)
  const [titleForm, setTitleForm] = useState('')
  
  
  return (
    <div className='page'>
      <Header />
      <Main setIsForm={setIsForm} isForm={isForm} setTitleForm={setTitleForm} />
      <BottomBar />
      {isForm ? <FormManagmentCurrency titleForm={titleForm} /> : null}
    </div>
    
  )
}

export default App
