import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notFound";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import CartProvider from "./contexts/cartContext";
import { PrivateRoute, ProtectedRoute } from "./routes/RouteGuards";
import ChatSupportPage from "./pages/support";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/practice" element={<PracticePage />} />

          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/product/:productId" element={<ProductPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/support" element={<ChatSupportPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
