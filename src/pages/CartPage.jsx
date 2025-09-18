function CartPage({ cart, increaseQty, decreaseQty, removeFromCart, subtotal, discount, total }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-emerald-300 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-slate-400 mt-6">Your cart is empty.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((p) => (
              <div
                key={p.id}
                className="flex flex-wrap lg:flex-nowrap items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-24 w-24 rounded-lg bg-slate-800/60 p-2 object-contain shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h2 className="text-slate-100 font-medium break-words line-clamp-2">{p.title}</h2>
                  <div className="mt-1 text-slate-300 text-sm">Price: ${p.price}</div>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(p.id)}
                      className="h-8 w-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="min-w-[2ch] text-center">{p.quantity}</span>
                    <button
                      onClick={() => increaseQty(p.id)}
                      className="h-8 w-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>

                    <span className="ml-3 text-sm text-slate-300">
                      Item total:{" "}
                      <span className="font-semibold text-slate-100">
                        ${(p.price * p.quantity).toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="ml-auto">
                  <button
                    onClick={() => removeFromCart(p.id)}
                    className="inline-flex items-center rounded-lg bg-red-600/80 px-3 h-9 text-white hover:bg-red-500"
                  >
                    <i className="fa-solid fa-trash-can mr-2"></i>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl border border-slate-800 p-5 bg-slate-900/60 lg:sticky lg:top-24 w-full">
              <h2 className="text-lg font-semibold text-slate-100">Order Summary</h2>

              <div className="mt-4 flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-1 flex justify-between text-slate-300">
                <span>Discount (10%)</span>
                <span>− ${discount.toFixed(2)}</span>
              </div>

              <div className="my-3 h-px bg-slate-800"></div>

              <div className="flex justify-between text-slate-100 font-semibold text-xl">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-slate-950 font-semibold hover:bg-emerald-500">
                <i className="fa-solid fa-bag-shopping"></i>
                Place Order
              </button>

              <p className="text-xs text-slate-400 mt-2">
                Taxes and shipping calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
