import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalapiService {
  async searchStock(query: string): Promise<any> {
    try {
      const apiKey = process.env.API_KEY;
      const apiBaseUrl =
        process.env.API_BASE_URL || 'https://financialmodelingprep.com';
      const url = `${apiBaseUrl}/stable/search-symbol?query=${query}&apikey=${apiKey}`;

      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw error;
    }
  }
}
