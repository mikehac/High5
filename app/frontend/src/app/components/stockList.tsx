import { StockItem } from '@high5/interfaces';
import { Button, List } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  deleteStockByUser,
  DUMMY_USER_ID,
  getStocksByUser,
} from '../../utils/httpService.mongo';

export default function StockList({
  dataSource,
  enableEdit = false,
}: {
  dataSource: StockItem[];
  enableEdit?: boolean;
}) {
  const navigate = useNavigate();
  const handleViewDetails = (item: any) => {
    navigate(`/stock/${item.symbol}`, { state: { stockData: item } });
  };

  const [localSource, setLocalSource] = useState<StockItem[]>([]);
  useEffect(() => {
    setLocalSource(dataSource);
  }, [dataSource]);

  const handleRemove = (item: StockItem) => {
    console.log('Remove stock:', item);
    deleteStockByUser(DUMMY_USER_ID, item.symbol).then((res) => {
      console.log('Stock removed:', res);
      //TODO: Continue here!!!!!
      getStocksByUser(DUMMY_USER_ID).then((stocks) => {
        setLocalSource(stocks);
      });
    });
  };

  if (!dataSource || dataSource.length === 0) {
    return <p>No stocks found.</p>;
  }
  function renderButtons(item: StockItem) {
    if (enableEdit) {
      return (
        <div>
          <Button type="link" onClick={() => handleRemove(item)}>
            Remove
          </Button>
          <Button type="link" onClick={() => handleViewDetails(item)}>
            View Details
          </Button>
        </div>
      );
    }

    return (
      <div>
        <Button type="link" onClick={() => handleViewDetails(item)}>
          View Details
        </Button>
      </div>
    );
  }

  return (
    <List
      size="small"
      bordered
      dataSource={localSource}
      renderItem={(item) => (
        <List.Item>
          <div className="item">
            <div>
              <strong>{item.symbol}</strong>: {item.name} - {item.exchange}
            </div>
            {renderButtons(item)}
          </div>
        </List.Item>
      )}
    ></List>
  );
}
