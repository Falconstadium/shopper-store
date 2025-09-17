import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import { useCartStore } from "../store/cart";

export const Route = createFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  const { cart, addToCart, removeItem, removeFromCart } = useCartStore();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const navigate = useNavigate();

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar />
      {cart.length == 0 ? (
        <div className="mx-auto grid max-w-xl place-content-center">
          <h3 className="text-3xl font-bold">Cart is empty</h3>
        </div>
      ) : (
        <div className="mx-auto max-w-xl space-y-4 px-4 py-8">
          {cart.map((item) => (
            <>
              <div
                className="flex w-full items-center justify-between gap-x-8 text-sm"
                key={item.id}
              >
                <h3 className="font-semibold text-nowrap">
                  {item.title.length > 20
                    ? `${item.title.slice(0, 20)}...`
                    : item.title}
                </h3>
                <div className="flex w-32 items-center justify-between rounded bg-indigo-50 px-2 py-1 shadow">
                  <button type="button" onClick={() => removeItem(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button type="button" onClick={() => addToCart(item)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="rounded bg-red-600 p-1 text-gray-100 transition-colors duration-300 hover:bg-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="h-0.5 w-full shadow"></div>
            </>
          ))}
        </div>
      )}

      {cart.length != 0 && (
        <footer className="py-3">
          <div className="mx-auto flex max-w-2xl items-center justify-between">
            <p className="font-medium">
              Total:
              <span className="text-sm"> ${totalPrice.toFixed(2)}</span>
            </p>
            <button
              type="button"
              className="rounded-sm bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-50 transition-colors duration-300 ease-in-out hover:bg-gray-700"
              onClick={() => navigate({ to: "/checkout" })}
            >
              Proceed to Checkout
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
