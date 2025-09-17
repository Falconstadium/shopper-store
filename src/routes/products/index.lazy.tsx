import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { getProduct } from "../../api/products";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import ProductsList from "../../components/Products";
import type { productProps } from "../../types/props";

export const Route = createLazyFileRoute("/products/")({
  component: ProductIndex,
});

function ProductIndex() {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  // const filtredProducts = (p: { category: string }) =>
  //   p.category === "men's clothing";

  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr]">
      <Navbar />
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-8">
        {products?.map((p: productProps) => (
          <ProductsList
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            category={p.category}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </main>
  );
}
