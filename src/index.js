import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiteContainer from './components/SiteContainer';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import localeData from './../build/locales/data.json';
import footer from '../public/images/footer.png';

addLocaleData([...en, ...pt]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <div>
      <SiteContainer />
      <footer>
        <img src={footer} />
      </footer>
    </div>
  </IntlProvider>,
  document.getElementById('root')
);
