import { FC, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Layout, FeaturedProduct, ProductSection, Cart } from "../components";
import { useCartContext, useProductContext } from "../context";
import { db } from "../libs/firebase";

const Home: FC = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { loadProducts } = useProductContext();

  useEffect(() => {
    loadProducts(products);
  }, []);

  const {
    cart: { isOpen },
  } = useCartContext();

  return (
    <Layout>
      <main className="product-list">
        <FeaturedProduct products={products} />
        <ProductSection />
        {isOpen ? <Cart /> : null}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snapshot = await db.collection("mainProducts").get();

  const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      products: data,
    },
  };
};

export default Home;
