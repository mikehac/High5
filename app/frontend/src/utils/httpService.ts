function getHeaders() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  //TODO: If I have enough time to imlement the authorization, this method would be expended
  return headers;
}

export function getFromApi(query: string): Promise<any> {
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}externalapi?query=${encodeURIComponent(query)}`;
  const headers = getHeaders();

  return fetch(url, {
    method: 'GET',
    headers,
  }).then((resp) => resp.json());
}
