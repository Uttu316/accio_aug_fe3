import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notFound";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/practice" element={<PracticePage />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/product/:productId" element={<ProductPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
