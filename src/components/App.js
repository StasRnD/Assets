import '../index.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import BottomBar from './BottomBar';
import Form from './Form';
import { coinsList } from '../utils/constans';
// import { BaseDialog } from './BaseDialog';

const App = () => {
  const [coins, updateCoins] = useState(coinsList);
  const [currentDialogType, openDialog] = useState();

  return (
    <div className='page'>
      <Header />
      <Main coins={coins} openDialog={openDialog} />
      <BottomBar />
      <Form
        coins={coins}
        currentDialogType={currentDialogType}
        updateCoins={updateCoins}
        openDialog={openDialog}
      />
    </div>
  );
};

export default App;
