import { dialogs } from '../utils/constans';
import { BaseDialog } from './BaseDialog';

const Form = ({ coins, currentDialogType, updateCoins, openDialog }) => {
  switch (currentDialogType) {
    case dialogs.send:
      return (
        <BaseDialog
          coins={coins}
          currentDialogType={currentDialogType}
          updateCoins={updateCoins}
          openDialog={openDialog}
        />
      );

    case dialogs.receive:
      return (
        <BaseDialog
          coins={coins}
          currentDialogType={currentDialogType}
          updateCoins={updateCoins}
          openDialog={openDialog}
        />
      );

    default:
      return null;
  }
};
export default Form;
