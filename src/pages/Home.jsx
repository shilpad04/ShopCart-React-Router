import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ products, searchTerm, selectedCategory, onAddCart }) {
  const [cartIds, setCartIds] = useState(new Set());

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const byCat = selectedCategory ? p.category === selectedCategory : true;
      const bySearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return byCat && bySearch;
    });
  }, [products, selectedCategory, searchTerm]);

  const handleAdd = (product, qty = 1) => {
    onAddCart(product, qty);
    setCartIds((prev) => new Set(prev).add(product.id));
  };

  const handleRemoveFlag = (id) => {
    setCartIds((prev) => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="mx-auto mb-6 mt-6 max-w-7xl text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-emerald-300">
        Products
      </h1>

      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddCart={handleAdd}
            inCart={cartIds.has(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
