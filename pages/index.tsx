import { FC, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Layout, FeaturedProduct, ProductSection, Cart } from "../components";
import { useCartContext, useProductContext } from "../context";
import data from "../products.json";

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
  // const res = await fetch("/products.json");

  // console.log(res.json());

  // const products: IProductProps[] = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
};

export default Home;
