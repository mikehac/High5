import { getHeaders } from './headers';

export function postStockByUser(
  userId: string,
  stockItem: {
    currency: string;
    exchange: string;
    exchangeFullName: string;
    name: string;
    symbol: string;
  }
): Promise<any> {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}mongo/${userId}`;
  const headers = getHeaders();

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(stockItem),
  }).then((resp) => resp.json());
}

export function deleteStockByUser(
  userId: string,
  stockSymbol: string
): Promise<any> {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}mongo/${userId}/${stockSymbol}`;
  const headers = getHeaders();

  return fetch(url, {
    method: 'DELETE',
    headers,
  }).then((resp) => resp.json());
}

export function getStocksByUser(userId: string): Promise<any> {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}mongo/${userId}`;
  const headers = getHeaders();

  return fetch(url, {
    method: 'GET',
    headers,
  }).then((resp) => resp.json());
}
