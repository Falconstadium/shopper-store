import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr]">
      <Navbar />
      <section className="mx-auto grid max-w-5xl place-content-center place-items-center items-center gap-8 md:grid-cols-2">
        <div className="grid place-items-center gap-5 md:place-items-start">
          <h3 className="text-3xl font-extrabold md:text-5xl">
            Welcome to Shopper store!
          </h3>
          <Link
            to="/products"
            className="rounded-2xl bg-indigo-600 px-6 py-2 text-sm font-medium text-gray-100 transition-colors duration-300 ease-in-out hover:bg-indigo-500"
          >
            Discover more
          </Link>
        </div>
        <img
          src="/undraw_web-shopping_xd5k.svg"
          alt="shopping_svg"
          className="h-full w-2/3 object-cover md:w-full"
        />
      </section>
    </main>
  );
}
