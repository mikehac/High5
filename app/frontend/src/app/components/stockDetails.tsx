import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStockQuoteStore } from '../stores/RootStore';
import { Button } from 'antd';
import {
  deleteStockByUser,
  DUMMY_USER_ID,
  postStockByUser,
} from '../../utils/httpService.mongo';

const StockDetails = observer(function StockDetails() {
  const { symbol } = useParams<{ symbol: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const stockQuoteStore = useStockQuoteStore();
  const stockDataFromNav = location.state?.stockData;
  const cameFrom = location.state?.from.slice(1) || '/';
  const quote = symbol ? stockQuoteStore.getQuote(symbol) : undefined;

  useEffect(() => {
    if (!quote && symbol) {
      stockQuoteStore.fetchQuote(symbol);
    }
  }, [quote, symbol, stockQuoteStore]);

  function addToPortfolioEvent() {
    if (!quote) return;
    console.log(stockDataFromNav);
    postStockByUser(DUMMY_USER_ID, stockDataFromNav).then((res) => {
      // If I had more time, I would give a user notification that his portfolio was updated
      navigate('/myportfolio');
    });
  }

  function removeFromPortfolioEvent() {
    if (!symbol) return;

    deleteStockByUser(DUMMY_USER_ID, symbol).then((res) => {
      navigate('/myportfolio');
    });
  }

  if (!quote) return <div className="main-section">Loading...</div>;

  return (
    <div className="main-section">
      <header>Stock details</header>
      <h1 className="details">
        {quote.name} ({quote.symbol})
      </h1>
      <p className="details">Latest stock quote: ${quote.price.toFixed(2)}</p>
      <p className="details">Change: {quote.change.toFixed(2)}</p>
      <p className="details">
        Percentage Change: {quote.changesPercentage.toFixed(2)}%
      </p>
      <p className="details">
        Volume:{' '}
        {quote.volume.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p className="details">
        {cameFrom === 'myportfolio' && (
          <Button onClick={removeFromPortfolioEvent} className="add-btn">
            Remove from portfolio
          </Button>
        )}
        {cameFrom === 'browse' && (
          <Button onClick={addToPortfolioEvent} className="add-btn">
            Add to portfolio
          </Button>
        )}
      </p>
    </div>
  );
});

export default StockDetails;
