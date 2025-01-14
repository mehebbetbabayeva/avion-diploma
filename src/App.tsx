import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header1 from './components/Header/Header1';
import Header2 from './components/Header2/Header2';
import Introduction from './components/Introduction/Introduction';
import Brandcards from './components/Brandcards/Brandcards';
import Ceramiccards from './components/Ceramiccards/Ceramiccards';
import Accordion from './components/Accordion/Accordion';
import Popularcards from './components/Popularcards/Popularcards';
import Benefit from './components/Benefit/Benefit';
import London from './components/London/London';
import Footers from './components/Footers/Footers';

import az from "../locales/az.json";
import en from '../locales/en.json';
import ru from '../locales/ru.json';

type Messages = {
  [key: string]: string;
};

const messages: Record<string, Messages> = { az, en, ru };


function App() {
  const [locale, setLocale] = useState('az');

  const changeLanguage = (lang: string) => {
    setLocale(lang);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <>
        <Header1 changeLanguage={changeLanguage} />
        <Header2 />
        <Introduction />
        <Brandcards />
        <Ceramiccards />
        <Accordion />
        <Popularcards />
        <Benefit />
        <London />
        <Footers />
      </>
    </IntlProvider>
  );
}

export default App;
