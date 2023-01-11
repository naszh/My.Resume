import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';

import App from './App';
import { ThemeProvider } from './theme/themeProvider';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Fragment>
    <Normalize />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Fragment>
);
