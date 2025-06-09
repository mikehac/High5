import { makeAutoObservable, runInAction } from 'mobx';
import { httpGet } from '../../utils/httpService';
import { QuoteData } from '../interfaces/QuoteData';

export class StockQuoteStore {
  quotes = new Map<string, QuoteData>();
  constructor() {
    makeAutoObservable(this);
  }
  async fetchQuote(symbol: string) {
    const response = await httpGet('quote-stock', symbol);
    runInAction(() => {
      this.quotes.set(symbol, response);
    });
  }

  getQuote(symbol: string): QuoteData | undefined {
    return this.quotes.get(symbol);
  }
}
