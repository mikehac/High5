// src/stores/RootStore.ts
import { createContext, useContext } from 'react';
import { StockQuoteStore } from './StockQuoteStore';

class RootStore {
  stockQuoteStore: StockQuoteStore;

  constructor() {
    this.stockQuoteStore = new StockQuoteStore();
  }
}

export const rootStore = new RootStore();
export const RootStoreContext = createContext(rootStore);

export const useRootStore = () => useContext(RootStoreContext);
export const useStockQuoteStore = () => useRootStore().stockQuoteStore;
