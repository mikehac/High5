// Uncomment this line to use CSS modules
import './app.module.scss';
import './styles/index.scss';

import { Route, Routes, Navigate } from 'react-router-dom';
import { StockBrowser } from './components/stockBrowser';
import UserPortfolio from './components/userPortfolio';
import Header from './components/header';

export function App() {
  return (
    <section className="main-section">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/browse" replace />} />
        <Route path="/browse" element={<StockBrowser />} />
        <Route path="/myportfolio" element={<UserPortfolio />} />
      </Routes>
    </section>
  );
}

export default App;
