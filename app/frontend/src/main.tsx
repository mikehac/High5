import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { rootStore, RootStoreContext } from './app/stores/RootStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RootStoreContext.Provider value={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootStoreContext.Provider>
  </StrictMode>
);
