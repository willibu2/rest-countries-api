import Button from './Button';
import { MdArrowBack } from 'react-icons/md';
import classes from './BackButton.module.css'

const BackButton = () => {
  return (
    <Button link="/" className={classes['back-btn']}>
      <MdArrowBack className={classes['icon-arrow']} />
      Back
    </Button>
  );
};

export default BackButton;
