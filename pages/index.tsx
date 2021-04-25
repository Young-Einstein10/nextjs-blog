import { FC } from "react";
import { Layout, FeaturedProduct, ProductSection, Cart } from "../components";
import { useCartContext } from "../context";

const Home: FC = () => {
  const {
    cart: { isOpen },
  } = useCartContext();

  return (
    <Layout>
      <main className="product-list">
        <FeaturedProduct />
        <ProductSection />
        {isOpen ? <Cart /> : null}
      </main>
    </Layout>
  );
};

export default Home;
