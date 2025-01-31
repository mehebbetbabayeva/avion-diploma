import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header1 from './components/Header/Header1';
import Header2 from './components/Header2/Header2';
import Footers from './components/Footers/Footers';
import { IntlProvider } from 'react-intl';
import az from "../locales/az.json";
import en from '../locales/en.json';
import ru from '../locales/ru.json';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
type Messages = {
    [key: string]: string;
  };
  const messages: Record<string, Messages> = { az, en, ru };

const App = () => {
    const [locale, setLocale] = useState('az');
    const changeLanguage = (lang: string) => {
      setLocale(lang);
    };
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Header1 changeLanguage={changeLanguage} />
      <Header2/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />


        </Routes>
      </main>
      <Footers/>
      </IntlProvider>
  );
};

export default App;
