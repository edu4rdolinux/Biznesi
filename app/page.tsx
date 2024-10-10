// app/page.tsx ou app/layout.tsx

import Header from './components/Header';
import Products from './components/Products';
import { TotalPriceProvider } from './components/TotalPriceContext'; // Ajuste o caminho se necessário
import "./styles/global.scss";

export default function Home() {
  return (
    <TotalPriceProvider>
      <Header />
      <Products />
    </TotalPriceProvider>
  );
}
