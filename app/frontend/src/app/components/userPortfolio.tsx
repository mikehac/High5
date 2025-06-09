import { StockItem } from '@high5/interfaces';
import { useEffect, useState } from 'react';
import { DUMMY_USER_ID, getStocksByUser } from '../../utils/httpService.mongo';
import StockList from './stockList';

export default function UserPortfolio() {
  const [userPortfolio, setUserPortfolio] = useState<StockItem[]>([]);
  useEffect(() => {
    async function fetchUserPortfolio() {
      try {
        const response = await getStocksByUser(DUMMY_USER_ID);

        setUserPortfolio(response);
      } catch (error) {
        console.error('Failed to fetch user portfolio:', error);
      }
    }

    fetchUserPortfolio();
  }, []);
  return (
    <div className="main-section">
      <header>Stock Portfolio</header>
      <StockList enableEdit={true} dataSource={userPortfolio} />
    </div>
  );
}
