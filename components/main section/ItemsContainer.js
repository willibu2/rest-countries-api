import classes from './ItemsContainer.module.css';
import SingleItem from './SingleItem';
import { useDataContext } from '../../store/data-context';

const ItemsContainer = (props) => {
  const dataCtx = useDataContext();

  const data = dataCtx.countriesState.filteredCountries;
  const isLoading = dataCtx.countriesState.isLoading;

  if (isLoading) {
    return <p className={classes.loading}>Loading...</p>;
  }

  if (data.length === 0) {
    return <p className={classes.loading}>No countries match your criteria.</p>;
  }

  return (
    <div className={classes.main}>
      {data.map((item) => (
        <SingleItem
          key={item.name.official}
          name={item.name.common}
          capital={item.capital}
          region={item.region}
          population={item.population}
          flag={item.flags.svg}
          alt={item.flags.alt}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
