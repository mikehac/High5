// Uncomment this line to use CSS modules
import './app.module.scss';

import { Route, Routes } from 'react-router-dom';
import { StockBrowser } from './components/stockBrowser';
import UserPortfolio from './components/userPortfolio';

export function App() {
  return (
    <Routes>
      <Route path="/browse" element={<StockBrowser />} />
      <Route path="/myportfolio" element={<UserPortfolio />} />
    </Routes>
  );
}

export default App;
