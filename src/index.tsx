import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import './index.css';
import App from './App';
import React from 'react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.Fragment>
		<Normalize />
		<App />
	</React.Fragment>
);
