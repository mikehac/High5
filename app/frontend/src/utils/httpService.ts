function getHeaders() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  //TODO: If I have enough time to imlement the authorization, this method would be expended
  return headers;
}
//http://localhost:3000/api/externalapi?query=p500
//http://localhost:3000/api/externalapi/quote-stock/AAPL

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
