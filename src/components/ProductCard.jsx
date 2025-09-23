function ProductCard({ product, onAddCart, onView, inCart }) {
  return (
    <div className="product">
      <div
        className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition p-4 sm:p-5 min-h-[420px] text-slate-200 cursor-pointer"
        onClick={() => onView(product)}
      >
        <div className="rounded-xl bg-slate-800/60 p-4">
          <img src={product.image} alt={product.title} className="h-48 md:h-56 w-full object-contain mx-auto" />
        </div>

        <h2 className="mt-3 text-sm sm:text-base font-semibold text-slate-100 leading-tight line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto pt-3 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
          <p className="text-lg font-bold text-emerald-300">${product.price}</p>

          <div className="flex items-center gap-2">
            {inCart && (
              <button
                className="inline-flex items-center justify-center rounded-xl bg-slate-700 px-3 h-10 text-slate-100 hover:bg-slate-600"
                onClick={() => onView(product)}
              >
                In Cart
              </button>
            )}
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 h-10 text-slate-950 font-semibold hover:bg-emerald-500 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              onClick={() => onAddCart(product, 1)}
            >
              <i className="fa-solid fa-cart-shopping text-black"></i>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
