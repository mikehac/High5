import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStockQuoteStore } from '../stores/RootStore';
import { Button } from 'antd';

const StockDetails = observer(function StockDetails() {
  const { symbol } = useParams<{ symbol: string }>();
  const stockQuoteStore = useStockQuoteStore();
  const quote = symbol ? stockQuoteStore.getQuote(symbol) : undefined;

  useEffect(() => {
    if (!quote && symbol) {
      stockQuoteStore.fetchQuote(symbol);
    }
  }, [quote, symbol, stockQuoteStore]);

  function addToPortfolioEvent() {}
  if (!quote) return <p>Loading...</p>;

  return (
    <div className="main-section">
      <header>Stock details</header>
      <h1>
        {quote.name} ({quote.symbol})
      </h1>
      <p>Price: ${quote.price.toFixed(2)}</p>
      <p>
        Change: {quote.change.toFixed(2)} ({quote.changesPercentage.toFixed(2)}
        %)
      </p>
      <p>
        Volume:
        {quote.volume.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p>
        <Button onClick={addToPortfolioEvent} className="add-btn">
          Add to portfolio
        </Button>
      </p>
    </div>
  );
});

export default StockDetails;
