import { getHeaders } from './headers';

export function httpGet(
  endpoint: 'query' | 'quote-stock',
  query: string
): Promise<any>;
export function httpGet(
  endpoint: 'query' | 'quote-stock',
  quoteStock: string
): Promise<any>;

export function httpGet(
  endpoint: 'query' | 'quote-stock',
  queryOrQuoteStock: string
): Promise<any> {
  const baseUrl = process.env.BASE_URL;
  const sufixUrl =
    endpoint === 'query'
      ? `?${endpoint}=${queryOrQuoteStock}`
      : `/${endpoint}/${queryOrQuoteStock}`;
  const url = `${baseUrl}externalapi${sufixUrl}`;
  const headers = getHeaders();

  return fetch(url, {
    method: 'GET',
    headers,
  }).then((resp) => resp.json());
}
