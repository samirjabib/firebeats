import { Title } from "@/design-system";
import { AllProducts, callShopify } from "@/helpers/shopifty";

export default function Home({ products }: any) {
  console.log(products);

  return (
    <main className="">
      <Title as="h1" size={"mainTitle"}>
        This is a firebeats
      </Title>
    </main>
  );
}

export async function getStaticProps() {
  const response = await callShopify(AllProducts);
  const products = response.data.products.edges;


  return {
    props: {
      products,
    },
  };
}
