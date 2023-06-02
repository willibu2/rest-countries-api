import classes from './SingleItem.module.css';
import Image from 'next/image';
import { useColorContext } from '../../store/color-context';
import Link from 'next/link';
import { useDataContext } from '../../store/data-context';

const SingleItem = ({ name, population, capital, region, flag, alt }) => {
  const colorCtx = useColorContext();
  const dataCtx = useDataContext();

  const mainClasses = colorCtx.theme
    ? `${classes.main}`
    : `${classes.main} ${classes['main-dark-theme']}`;

  return (
    <Link href={name} className={mainClasses} onClick={dataCtx.reset}>
      <Image
        src={flag}
        width={240}
        height={150}
        alt={alt}
        className={classes['flag-img']}
      />
      <div className={classes['info-container']}>
        <h1 className={classes.name}>{name}</h1>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem;
