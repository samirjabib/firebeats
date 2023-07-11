import LandingPage from "@/components/landing-page/landing-page";
import { defaultSort, sorting } from "@/lib/shopify/constants";
import { getProducts } from "@/lib/shopify/shopifyFetch";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  console.log(products);

  return (
    <main className="">
      <LandingPage />
    </main>
  );
}
