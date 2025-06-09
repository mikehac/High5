import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStockQuoteStore } from '../stores/RootStore';

const StockDetails = observer(function StockDetails() {
  const { symbol } = useParams<{ symbol: string }>();
  const stockQuoteStore = useStockQuoteStore();
  const quote = symbol ? stockQuoteStore.getQuote(symbol) : undefined;

  useEffect(() => {
    if (!quote && symbol) {
      stockQuoteStore.fetchQuote(symbol);
    }
  }, [quote, symbol, stockQuoteStore]);

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
    </div>
  );
});

export default StockDetails;
