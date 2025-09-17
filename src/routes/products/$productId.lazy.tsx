import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "../../components/Navbar";
import { useCartStore } from "../../store/cart";
import type { productProps } from "../../types/props";

export const Route = createLazyFileRoute("/products/$productId")({
  component: ProductId,
  pendingComponent: () => {
    <p>Loading...</p>;
  },
});

function ProductId() {
  const { productId } = Route.useParams();
  const {
    title,
    description,
    category,
    image,
    price,
  }: Omit<productProps, "id"> = Route.useSearch();

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr]">
      <Navbar />
      <div
        key={productId}
        className="mx-auto grid max-w-4xl place-content-center items-center gap-4 px-8 py-6 text-gray-900 md:grid-cols-2 md:gap-0"
      >
        <div className="place-items-center md:place-items-start">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-32 object-cover md:w-48"
          />
        </div>
        <div className="grid gap-3">
          <h1 className="text-center text-2xl font-bold md:text-start">
            {title}
          </h1>
          <p className="capitalize">
            <span className="text-lg font-medium">Category: </span>
            {category}
          </p>
          <p className="text-sm font-medium text-gray-700">{description}</p>
          <p className="font-semibold">${price}</p>

          <button
            type="button"
            className="rounded bg-indigo-600 px-6 py-2 text-sm font-medium text-gray-50 transition-colors duration-300 ease-in-out hover:bg-indigo-500"
            onClick={() =>
              addToCart({
                quantity: 1,
                id: parseInt(productId),
                title: title,
                price: price,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
