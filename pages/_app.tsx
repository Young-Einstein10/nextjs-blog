import { AppProps } from "next/app";
import { CartProvider, ProductProvider } from "../context";
import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ProductProvider>
  );
}
