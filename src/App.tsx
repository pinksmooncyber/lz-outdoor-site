import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OemOdmPage } from './pages/OemOdmPage';
import { AboutPage } from './pages/AboutPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { RequestAQuotePage } from './pages/RequestAQuotePage';
import { ContactPage } from './pages/ContactPage';
import { AppRoute, ProductCategory } from './types';

export default function App() {
  const [route, setRoute] = useState<AppRoute>({ path: 'home' });

  // Sync with window.location.hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === '') {
        setRoute({ path: 'home' });
      } else if (hash === 'products') {
        setRoute({ path: 'products' });
      } else if (hash === 'products/rooftop-tents') {
        setRoute({ path: 'products', category: 'rooftop-tents' });
      } else if (hash === 'products/vehicle-awnings') {
        setRoute({ path: 'products', category: 'vehicle-awnings' });
      } else if (hash === 'products/camping-4wd-accessories') {
        setRoute({ path: 'products', category: 'camping-4wd-accessories' });
      } else if (hash.startsWith('products/')) {
        const slug = hash.replace('products/', '');
        setRoute({ path: 'product-detail', slug });
      } else if (hash === 'oem-odm') {
        setRoute({ path: 'oem-odm' });
      } else if (hash === 'about') {
        setRoute({ path: 'about' });
      } else if (hash === 'blog') {
        setRoute({ path: 'blog' });
      } else if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        setRoute({ path: 'blog-detail', slug });
      } else if (hash === 'contact') {
        setRoute({ path: 'contact' });
      } else if (hash.startsWith('request-a-quote')) {
        const urlParams = new URLSearchParams(hash.split('?')[1] || '');
        const preselectedProduct = urlParams.get('product') || undefined;
        setRoute({ path: 'request-a-quote', preselectedProduct });
      } else {
        setRoute({ path: 'home' });
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (newRoute: AppRoute) => {
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update hash to keep URL in sync
    let targetHash = '';
    switch (newRoute.path) {
      case 'home':
        targetHash = '';
        break;
      case 'products':
        targetHash = newRoute.category ? `products/${newRoute.category}` : 'products';
        break;
      case 'product-detail':
        targetHash = `products/${newRoute.slug}`;
        break;
      case 'oem-odm':
        targetHash = 'oem-odm';
        break;
      case 'about':
        targetHash = 'about';
        break;
      case 'blog':
        targetHash = 'blog';
        break;
      case 'blog-detail':
        targetHash = `blog/${newRoute.slug}`;
        break;
      case 'contact':
        targetHash = 'contact';
        break;
      case 'request-a-quote':
        targetHash = newRoute.preselectedProduct
          ? `request-a-quote?product=${encodeURIComponent(newRoute.preselectedProduct)}`
          : 'request-a-quote';
        break;
    }

    if (window.location.hash.replace(/^#\/?/, '') !== targetHash) {
      window.location.hash = targetHash ? `#/${targetHash}` : '#/';
    }
  };

  const renderCurrentView = () => {
    switch (route.path) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'products':
        return <ProductsPage initialCategory={route.category} onNavigate={navigateTo} />;
      case 'product-detail':
        return <ProductDetailPage slug={route.slug} onNavigate={navigateTo} />;
      case 'oem-odm':
        return <OemOdmPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'blog':
        return <BlogListingPage onNavigate={navigateTo} />;
      case 'blog-detail':
        return <BlogDetailPage slug={route.slug} onNavigate={navigateTo} />;
      case 'request-a-quote':
        return <RequestAQuotePage preselectedProduct={route.preselectedProduct} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-stone-900 selection:text-white">
      <Header currentRoute={route} onNavigate={navigateTo} />
      <main className="flex-1">{renderCurrentView()}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
