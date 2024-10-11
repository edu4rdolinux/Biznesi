import Header from './components/Header';
import Products from './components/Products';
import { TotalPriceProvider } from './components/TotalPriceContext';
import "./styles/global.scss";

export default function Home() {
  return (
    <TotalPriceProvider>
      <Header />
      <Products />
    </TotalPriceProvider>
  );
}
