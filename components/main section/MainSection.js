import classes from './MainSection.module.css';
import { useColorContext } from '../../store/color-context';
import { useEffect } from 'react';

const MainSection = (props) => {
  const colorCtx = useColorContext();
  const theme = colorCtx.theme;

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    } else {
      document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    }
  }, [theme]);

  return <section className={classes.main}>{props.children}</section>;
};

export default MainSection;
