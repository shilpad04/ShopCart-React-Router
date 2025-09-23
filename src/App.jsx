import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const i = prev.findIndex((x) => x.id === product.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], quantity: copy[i].quantity + qty };
        return copy;
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, quantity: x.quantity + 1 } : x))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, quantity: x.quantity - 1 } : x))
        .filter((x) => x.quantity > 0)
    );
  };

  const cartCount = useMemo(
    () => cart.reduce((acc, x) => acc + x.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((acc, x) => acc + x.price * x.quantity, 0),
    [cart]
  );
  const discount = useMemo(() => subtotal * 0.1, [subtotal]);
  const total = useMemo(() => Math.max(subtotal - discount, 0), [subtotal, discount]);

  if (error) {
    return (
      <h1 className="min-h-screen flex items-center justify-center text-red-300">
        Error: {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar
        onCartClick={() => navigate("/cart")}
        cartCount={cartCount}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchValue={searchTerm}
        onSearch={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onAddCart={addToCart}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Home
              products={products}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onAddCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
              subtotal={subtotal}
              discount={discount}
              total={total}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
