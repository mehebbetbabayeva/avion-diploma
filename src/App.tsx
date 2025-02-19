import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Cart from './pages/Cart';

type Messages = {
    [key: string]: string;
};

const messages: Record<string, Messages> = { az, en, ru };

const App = () => {
  
    const storedLang = localStorage.getItem('language') || 'en';
    const [locale, setLocale] = useState(storedLang);
    const [currentMessages, setCurrentMessages] = useState(messages[storedLang]);

    const changeLanguage = (lang: string) => {
        setLocale(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        setCurrentMessages(messages[locale]); 
    }, [locale]);

    return (
        <Provider store={store}>
            <IntlProvider locale={locale} messages={currentMessages} defaultLocale="en">
                <Header1 changeLanguage={changeLanguage} />
                <Header2 />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
                <Footers />
            </IntlProvider>
        </Provider>
    );
};


export default App;
