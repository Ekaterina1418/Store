import { createBrowserRouter } from 'react-router';
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'consent', element: <Consent /> },
      { path: 'delivery', element: <DeliveryPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
]);
