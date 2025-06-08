import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { getFromApi } from '../../utils/httpService';
import { Input, List } from 'antd';
//TODO: Refactor the folowing import, The App component should have the include of app.module.scss
import '../styles/StockBrowser.scss';

export function StockBrowser() {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useCallback(
    async (query: string) => {
      if (!query || query.length < 2) {
        setSearchResult([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const searchStockResult = await getFromApi(query);
        setSearchResult(
          Array.isArray(searchStockResult) ? searchStockResult : []
        );
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError('Failed to fetch stocks. Please try again.');
        setSearchResult([]);
      } finally {
        setLoading(false);
      }
    },
    [setSearchResult, setLoading, setError]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      debouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, debouncedSearch]);

  function searchChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value);
  }

  return (
    <section className="main-section">
      <header>Stock Browser</header>
      <div>
        <Input
          type="text"
          className="search-input"
          placeholder="Search stock..."
          onChange={searchChangeHandler}
          value={search}
        />
      </div>

      {loading && <div>Loading...</div>}

      {error && <div className="error">{error}</div>}

      {!loading && !error && searchResult.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <List
            size="small"
            bordered
            dataSource={searchResult}
            renderItem={(item) => (
              <List.Item>
                <strong>{item.symbol}</strong>: {item.name} - {item.exchange}
              </List.Item>
            )}
          />
        </div>
      )}
    </section>
  );
}
