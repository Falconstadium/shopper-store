import { Link } from "@tanstack/react-router";
import type { productProps } from "../types/props";

function ProductsList({
  id,
  title,
  image,
  description,
  category,
  price,
}: productProps) {
  return (
    <div className="grid h-48 w-48 place-items-center overflow-hidden rounded bg-indigo-50 p-4 shadow md:h-60 md:w-60">
      <Link
        to="/products/$productId"
        params={{ productId: id.toString() }}
        search={{
          title: title,
          description: description,
          category: category,
          price: price,
          image: image,
        }}
      >
        <img
          src={image}
          alt={title}
          className="mx-auto w-1/2 object-cover transition duration-300 ease-in-out hover:scale-105"
        />
      </Link>
    </div>
  );
}

export default ProductsList;
