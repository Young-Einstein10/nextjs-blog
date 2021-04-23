import { Layout, FeaturedProduct, ProductSection } from "../components";

export default function Home() {
  // console.log(params, allPostsData);

  return (
    <Layout>
      <main className="product-list">
        <FeaturedProduct />
        <ProductSection />
      </main>
    </Layout>
  );
}
