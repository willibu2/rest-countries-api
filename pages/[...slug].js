import { useRouter } from 'next/router';
import ItemDetail from '../components/main section/ItemDetail';
import { useDataContext } from '../store/data-context';
import { useEffect, useState } from 'react';

const Slug = (props) => {
  const dataCtx = useDataContext();
  const router = useRouter();

  const country = router.query.slug;

  // console.log(country);

  // const [countryData, setCountryData] = useState();

  if (!country) {
    return <p>LOADING</p>;
  }

  const data = dataCtx.getSpecificCountry(country[0]);
  const countryData = data[0];

  // console.log(countryData);

  const bordersData = countryData.borders;

  // console.log(bordersData);

  const borders = dataCtx.getBorderCountries(bordersData);
  const capital = countryData.capital[0];
  const flag = countryData.flags.svg;
  const tld = countryData.tld[0];
  const { population, region, subregion } = countryData;
  const nativeName = Object.values(countryData.name.nativeName)[0].common;

  let currencies;
  for (const key in countryData.currencies) {
    currencies = countryData.currencies[key].name;
  }

  const languagesData = countryData.languages;
  let languages = '';
  for (const key in languagesData) {
    languages = languages + languagesData[key] + ', ';
  }
  languages = languages.slice(0, -2);

  return (
    <ItemDetail
      key={countryData.name.official}
      name={countryData.name.common}
      capital={capital}
      region={region}
      population={population}
      subregion={subregion}
      flag={flag}
      tld={tld}
      nativeName={nativeName}
      currencies={currencies}
      languages={languages}
      borders={borders}
    />
  );
};

export default Slug;
