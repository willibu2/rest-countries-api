import classes from './Filter.module.css';
import IconSearch from '../ICONS/IconSearch';
import { useColorContext } from '../../store/color-context';
import { useDataContext } from '../../store/data-context';

const Filter = () => {
  const colorCtx = useColorContext();
  const dataCtx = useDataContext();

  const searchContainerClasses = colorCtx.theme
    ? `${classes['search-container']}`
    : `${classes['search-container']} ${classes['search-container-dark']}`;
  const selectContainerClasses = colorCtx.theme
    ? `${classes['select-container']}`
    : `${classes['select-container']} ${classes['select-container-dark']}`;

  return (
    <div className={classes.main}>
      <form className={searchContainerClasses}>
        <IconSearch />
        <input
          className={classes.input}
          placeholder="Search for a country..."
          type="text"
          id="search"
          onChange={dataCtx.searchCountryHandler}
        />
      </form>
      <form className={selectContainerClasses}>
        <select
          id="continent"
          className={classes.select}
          onChange={dataCtx.selectContinentHandler}
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
