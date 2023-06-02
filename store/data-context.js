import React, { useContext, useEffect, useReducer } from 'react';

export const DataContext = React.createContext({});

const initialState = {
  countriesData: [],
  filteredCountries: [],
  searchValue: '',
  continent: 'All',
  isLoading: false,
};

const countriesReducer = (state, action) => {
  if (action.type === 'RESET') {
    return {
      ...state,
      filteredCountries: state.countriesData,
      searchValue: '',
      continent: 'All',
    };
  }

  if (action.type === 'FETCHINGDATA') {
    return {
      ...state,
      countriesData: action.data,
      filteredCountries: action.data,
    };
  }

  if (action.type === 'STARTLOADING') {
    return { ...state, isLoading: true };
  }
  if (action.type === 'ENDLOADING') {
    return { ...state, isLoading: false };
  }

  if (action.type === 'SEARCH') {
    const enteredValue = action.value.trim();

    let countries = state.countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      const countryContinent = country.continents[0];

      if (state.continent === 'All') {
        return countryName.startsWith(enteredValue);
      }

      if (state.continent === 'Americas') {
        return (
          (countryContinent === 'North America' ||
            countryContinent === 'South America') &&
          countryName.startsWith(enteredValue)
        );
      }

      return (
        countryName.startsWith(enteredValue) &&
        countryContinent === state.continent
      );
    });

    return {
      ...state,
      filteredCountries: countries,
      searchValue: enteredValue,
    };
  }

  if (action.type === 'SELECT') {
    console.log(state.continent);
    console.log(action.value);

    const selectedContinent = action.value;
    const newCountries = state.countriesData.filter((country) => {
      const countryContinent = country.continents[0];
      const countryName = country.name.common.toLowerCase();

      if (action.value === 'All') {
        return countryName.startsWith(state.searchValue);
      }

      if (action.value === 'Americas') {
        return (
          (countryContinent === 'North America' ||
            countryContinent === 'South America') &&
          countryName.startsWith(state.searchValue)
        );
      }
      return (
        countryContinent === selectedContinent &&
        countryName.startsWith(state.searchValue)
      );
    });

    return {
      ...state,
      continent: selectedContinent,
      filteredCountries: newCountries,
    };
  }

  return { ...initialState };
};

export const DataContextProvider = (props) => {
  const [countriesState, dispatchCountriesAction] = useReducer(
    countriesReducer,
    initialState
  );

  useEffect(() => {
    dispatchCountriesAction({ type: 'STARTLOADING' });

    const fetchFunction = async () => {
      const response = await fetch(
        'https://restcountries.com/v3.1/independent?status=true'
      );
      const data = await response.json();

      dispatchCountriesAction({ type: 'FETCHINGDATA', data: data });
      dispatchCountriesAction({ type: 'ENDLOADING' });
    };

    fetchFunction();
  }, []);

  const searchCountryHandler = (event) => {
    dispatchCountriesAction({ type: 'SEARCH', value: event.target.value });
  };

  const selectContinentHandler = (event) => {
    dispatchCountriesAction({ type: 'SELECT', value: event.target.value });
  };

  const reset = () => {
    setTimeout(() => {
      dispatchCountriesAction({ type: 'RESET' });
    }, 100);
  };

  const getSpecificCountry = (countryName) => {
    const countryData = countriesState.countriesData.filter((country) => {
      return country.name.common === countryName;
    });

    return countryData[0];
  };

  const getBorderCountries = (inputCountriesArray) => {
    let borderCountries = [];

    if (!inputCountriesArray) {
      return false;
    }

    inputCountriesArray.forEach((shortName) => {
      const countryData = countriesState.countriesData.filter((country) => {
        return country.cca3 === shortName;
      });

      if (countryData[0]) {
        borderCountries.push(countryData[0].name.common);
      }
    });

    return borderCountries;
  };

  const ctxData = {
    countriesState,
    searchCountryHandler,
    selectContinentHandler,
    getSpecificCountry,
    getBorderCountries,
    reset,
  };

  return (
    <DataContext.Provider value={ctxData}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
