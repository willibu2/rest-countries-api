import { useRouter } from 'next/router';
import ItemDetail from '../components/main section/ItemDetail';
import { useDataContext } from '../store/data-context';
import BackButton from '../components/UI/BackButton';
import CountryNotFound from '../components/main section/CountryNotFound';

const Slug = () => {
  const dataCtx = useDataContext();
  const router = useRouter();

  const country = router.query.slug;

  if (!country) {
    return <p className="global-text">LOADING...</p>;
  }

  const countryData = dataCtx.getSpecificCountry(country[0]);

  if (!countryData) {
    return <CountryNotFound />;
  }

  const bordersData = countryData.borders;

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
