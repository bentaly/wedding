import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiteContainer from './components/SiteContainer';
import footer from '../public/images/footer.png';

ReactDOM.render(
  <div>
    <SiteContainer />
    <footer>
      <img src={footer} />
    </footer>
  </div>,
  document.getElementById('root')
);
