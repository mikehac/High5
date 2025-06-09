import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalapiService {
  private apiKey = process.env.API_KEY;
  private apiBaseUrl =
    process.env.API_BASE_URL || 'https://financialmodelingprep.com';

  async searchStock(query: string): Promise<any> {
    try {
      const url = `${this.apiBaseUrl}/stable/search-symbol?query=${query}&apikey=${this.apiKey}`;
      const response = await fetch(url);

      return response.json();
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw error;
    }
  }

  async quoteStock(symbol: string): Promise<any> {
    try {
      const url = `${this.apiBaseUrl}/api/v3/quote/${symbol}?apikey=${this.apiKey}`;
      const response = await fetch(url);
      const result = await response.json();

      return Array.isArray(result) ? result[0] : result;
    } catch (error) {
      console.error('Error fetching quote Stock data:', error);
      throw error;
    }
  }
}
