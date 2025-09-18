function ProductDetails({ product, onClose, onAddCart, inCart, onRemove }) {
  const rating = product?.rating?.rate ?? 0;
  const count = product?.rating?.count ?? 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-[92vw] max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <i className="fas fa-times" />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img src={product.image} alt={product.title} className="h-60 w-60 object-contain rounded-lg bg-slate-800/60 p-4" />
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-xl font-bold text-emerald-300">{product.title}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
              <span>{rating}</span>
              <span>({count})</span>
            </div>
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-slate-300">{product.description}</p>
            <p className="text-sm text-slate-400">Category: {product.category}</p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onAddCart(product, 1)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-2 text-slate-950 font-semibold hover:bg-emerald-500"
              >
                <i className="fa-solid fa-cart-shopping text-black"></i>
                Add
              </button>
              {inCart && (
                <button
                  onClick={() => onRemove(product.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600/80 px-6 py-2 text-white hover:bg-red-500"
                >
                  <i className="fa-solid fa-trash-can"></i>
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
