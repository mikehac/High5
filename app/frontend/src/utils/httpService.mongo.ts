import { getHeaders } from './headers';
import { StockItem } from '@high5/interfaces';

// The following userId is a placeholder.
// In a real application, it would be replaced with the actual user ID
export const DUMMY_USER_ID = '5f8d0c2b9b1e8c001f8b4567';
export function postStockByUser(
  userId: string,
  stockItem: StockItem
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
