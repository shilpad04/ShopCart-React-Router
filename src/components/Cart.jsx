function Cart({
  cart,
  onClose,
  onRemoveFromCart,
  increaseQty,
  decreaseQty,
  subtotal,
  discount,
  total,
  onCheckout,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-x-hidden">
      <div className="relative w-full max-w-md sm:max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl text-slate-200">
        <button
          onClick={onClose}
          aria-label="Close cart"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          <i className="fas fa-times" />
        </button>

        <h1 className="text-center text-lg font-semibold text-slate-100">
          Cart Items
        </h1>

        {cart.length === 0 ? (
          <p className="text-slate-400 text-center py-6">No items in the cart</p>
        ) : (
          <div className="mt-4 space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-wrap sm:flex-nowrap items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3 sm:p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg bg-slate-800/60 p-2 object-contain shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-medium text-slate-100 break-words line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-emerald-300 font-semibold">
                    ${product.price}
                  </p>
                  <div className="mt-2 flex items-center gap-1 sm:gap-2 flex-nowrap text-xs sm:text-sm">
                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
                    >
                      <i className="fa-solid fa-minus text-[10px] sm:text-sm"></i>
                    </button>
                    <span className="min-w-[2ch] text-center">{product.quantity}</span>
                    <button
                      onClick={() => increaseQty(product.id)}
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
                    >
                      <i className="fa-solid fa-plus text-[10px] sm:text-sm"></i>
                    </button>
                    <span className="ml-2 sm:ml-3 text-slate-300">
                      Item total:{" "}
                      <span className="font-semibold text-slate-100">
                        ${(product.price * product.quantity).toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromCart(product.id)}
                  className="inline-flex items-center rounded-lg bg-red-600/80 px-2 sm:px-3 h-8 sm:h-9 text-white hover:bg-red-500 mt-2 sm:mt-0 text-xs sm:text-sm"
                >
                  <i className="fa-solid fa-trash-can mr-1 sm:mr-2"></i>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-5 rounded-xl border border-slate-800 p-4 bg-slate-900/60">
            <div className="flex justify-between text-slate-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-300 mt-1">
              <span>Discount (10%)</span>
              <span>− ${discount.toFixed(2)}</span>
            </div>
            <div className="my-3 h-px bg-slate-800"></div>
            <div className="flex justify-between text-slate-100 font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-2 text-slate-950 font-semibold hover:bg-emerald-500"
            >
              <i className="fa-solid fa-credit-card"></i>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
