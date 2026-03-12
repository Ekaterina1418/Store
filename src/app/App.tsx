import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Favorites } from './pages/Favorites';
import { ProductDetail } from './pages/ProductDetail';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Consent } from './pages/Consent';
import { DeliveryPage } from './pages/DeliveryPage';
import { PaymentPage } from './pages/PaymentPage';
import { Returns } from './pages/Returns';
import { Category } from './pages/Category';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="consent" element={<Consent />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="returns" element={<Returns />} />
          <Route path="category/:name" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}