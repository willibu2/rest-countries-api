import BackButton from '../UI/BackButton';
import classes from './CountryNotFound.module.css';
import { useColorContext } from '../../store/color-context';
import { useEffect } from 'react';

const CountryNotFound = () => {
  const colorCtx = useColorContext();
  const theme = colorCtx.theme;

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    } else {
      document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    }
  }, [theme]);

  return (
    <div className={classes.main}>
      <BackButton />
      <p className={classes.text}>That country does not exist</p>
    </div>
  );
};

export default CountryNotFound;
