import { useParams, Link } from "react-router-dom";

function ProductPage({ products, onAddCart, onRemoveFromCart, cart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-200">
        Product not found
      </div>
    );
  }

  const inCart = cart.some((p) => p.id === product.id);
  const rating = product?.rating?.rate ?? 0;
  const count = product?.rating?.count ?? 0;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-slate-200">
      <div className="mb-4">
        <Link
          to="/product"
          className="inline-flex items-center rounded-xl bg-slate-800/70 px-3 h-9 text-slate-100 hover:bg-slate-700"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl bg-slate-800/60 p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 sm:h-96 object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-emerald-300 leading-snug">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <i className="fa-solid fa-star" style={{ color: "#f59e0b" }} />
            <span>{rating}</span>
            <span>({count})</span>
          </div>

          <p className="text-xl font-semibold">${product.price}</p>

          <p className="text-slate-300 leading-relaxed">{product.description}</p>
          <p className="text-sm text-slate-400">Category: {product.category}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={() => onAddCart(product, 1)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-slate-950 font-semibold hover:bg-emerald-500"
            >
              <i className="fa-solid fa-cart-shopping" />
              {inCart ? "Add One More" : "Add to Cart"}
            </button>

            {inCart && (
              <button
                onClick={() => onRemoveFromCart(product.id)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600/80 px-6 py-3 text-white hover:bg-red-500"
              >
                <i className="fa-solid fa-trash-can" />
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
