import Link from 'next/link';
import classes from './Button.module.css';
import { useColorContext } from '../../store/color-context';

const Button = (props) => {
  const colorCtx = useColorContext();

  const linkClasses = colorCtx.theme
    ? `${classes.btn} ${props.className}`
    : `${classes.btn} ${props.className} ${classes['btn-dark-theme']}`;

  return (
    <Link className={linkClasses} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
