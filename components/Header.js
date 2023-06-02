import classes from './Header.module.css';
import IconMoon from './ICONS/IconMoon';
import { useColorContext } from '../store/color-context';
import Link from 'next/link';

const Header = (props) => {
  const colorContext = useColorContext();

  const headerClasses = colorContext.theme
    ? `${classes.header}`
    : `${classes.header} ${classes['header-dark-theme']}`;

  return (
    <div className={headerClasses}>
      <Link href={'/'} className={classes.title}>
        Where in the world?
      </Link>
      <div
        className={classes['switch-container']}
        onClick={colorContext.themeChangeHandler}
      >
        <IconMoon />
        <p className={classes.text}>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
