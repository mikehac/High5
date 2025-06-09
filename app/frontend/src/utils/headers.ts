export function getHeaders() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  //TODO: If I have enough time to imlement the authorization, this method would be expended
  return headers;
}
