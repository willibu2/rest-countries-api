import '../styles/globals.css';
import { ColorContextProvider } from '../store/color-context';
import { DataContextProvider } from '../store/data-context';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <ColorContextProvider>
        <Header />
        <Component {...pageProps} />
      </ColorContextProvider>
    </DataContextProvider>
  );
}
