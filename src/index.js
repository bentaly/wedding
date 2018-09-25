import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiteContainer from './components/SiteContainer';
import { IntlProvider, addLocaleData } from 'react-intl';

ReactDOM.render(
  <IntlProvider>
    <SiteContainer />
  </IntlProvider>,
  document.getElementById('root')
);
