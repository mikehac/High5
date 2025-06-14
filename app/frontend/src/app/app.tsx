// Uncomment this line to use CSS modules
import './app.module.scss';
import './styles/index.scss';

import { Route, Routes, Navigate } from 'react-router-dom';
import { StockBrowser } from './components/stockBrowser';
import UserPortfolio from './components/userPortfolio';
import Header from './components/header';
import StockDetails from './components/stockDetails';

export function App() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/browse" replace />} />
        <Route path="/stock/:symbol" element={<StockDetails />} />
        <Route path="/browse" element={<StockBrowser />} />
        <Route path="/myportfolio" element={<UserPortfolio />} />
      </Routes>
    </section>
  );
}

export default App;
