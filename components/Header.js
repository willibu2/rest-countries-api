import classes from './Header.module.css';
import { useColorContext } from '../store/color-context';
import Link from 'next/link';
import { MdOutlineDarkMode, MdArrowBack } from 'react-icons/md';

const Header = () => {
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
        <MdOutlineDarkMode className={classes['icon-moon']} />
        {colorContext.theme && <p className={classes.text}>Dark Mode</p>}
        {!colorContext.theme && <p className={classes.text}>Light Mode</p>}
      </div>
    </div>
  );
};

export default Header;
