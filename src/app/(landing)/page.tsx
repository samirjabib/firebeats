import LandingPage from "@/components/landing-page/landing-page";

export default function Home({ products }: any) {
  console.log(products);

  return (
    <main className="">
      <LandingPage />
    </main>
  );
}

