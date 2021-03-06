import Head from "next/head";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context";
import { Cart, Logo } from "../SVGs";
import styles from "./layout.module.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  const { container, column, row, addToCartBtn, cartCount } = styles;

  const {
    openCart,
    cart: { cartItems },
  } = useCartContext();

  return (
    <div className={container}>
      <div className={row}>
        <div className={column}>
          <Head>
            <title>Product List | Bejamas</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Bejamas Product List" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <nav className="d-flex justify-content-between align-items-center py-3">
            <div>
              <Logo />
            </div>

            <Button onClick={() => openCart()} className={addToCartBtn} variant="light">
              <Cart />
              <div className={cartCount}>{cartItems.length}</div>
            </Button>
          </nav>
          {children}
        </div>
      </div>
    </div>
  );
}
