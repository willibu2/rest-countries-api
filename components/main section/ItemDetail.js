import classes from './ItemDetail.module.css';
import Button from '../UI/Button';
import IconArrow from '../icons/IconArrow';
import Image from 'next/image';
import { useColorContext } from '../../store/color-context';
import MainSection from './MainSection';

const ItemDetail = (props) => {
  const {
    name,
    capital,
    region,
    population,
    subregion,
    flag,
    tld,
    nativeName,
    currencies,
    languages,
    borders,
  } = props;

  const colorCtx = useColorContext();
  const mainClasses = colorCtx.theme
    ? `${classes.main}`
    : `${classes.main} ${classes['main-dark-theme']}`;

  let bordersData;

  if (borders) {
    bordersData = borders.map((item) => {
      return (
        <Button
          key={item}
          className={classes['border-country-link']}
          link={item}
        >
          {item}
        </Button>
      );
    });
  }

  return (
    <MainSection>
      <Button link="/" className={classes['back-btn']}>
        <IconArrow />
        Back
      </Button>

      <div className={mainClasses}>
        <Image
          className={classes.img}
          src={flag}
          width={600}
          height={400}
          alt="flag"
        />

        <div className={classes['info-container']}>
          <h1 className={classes.title}>{name}</h1>
          <div className={classes['info-grid']}>
            <div className={classes['first-row']}>
              <p className={classes.text}>
                <span className={classes.span}>Native Name:</span> {nativeName}
              </p>
              <p className={classes.text}>
                <span className={classes.span}>Population:</span> {population}
              </p>
              <p className={classes.text}>
                <span className={classes.span}>Region:</span> {region}
              </p>
              <p className={classes.text}>
                <span className={classes.span}>Sub Region:</span> {subregion}
              </p>
              <p className={classes.text}>
                <span className={classes.span}>Capital:</span> {capital}
              </p>
            </div>
            <div className={classes['second-row']}>
              <p className={classes.text}>
                <span className={classes.span}>Top Level Domain:</span> {tld}
              </p>
              <p className={classes.text}>
                <span className={classes.span}>Currencies:</span> {currencies}
              </p>
              <p className={classes.text}>
                <span className={classes.span}>Languages:</span> {languages}
              </p>
            </div>
            <div className={classes['border-container']}>
              <p className={`${classes.span} ${classes['border-title']}`}>
                Border Countries:
              </p>
              <div className={classes['links-container']}>{bordersData}</div>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default ItemDetail;
