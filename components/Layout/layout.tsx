import Head from "next/head";
import { Button, Row, Col, Container } from "react-bootstrap";
import styles from "./layout.module.scss";

const Logo = "./images/logo.png";
const CartIcon = "./images/cart.png";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col className="">
          <Head>
            <title>Product List | Bejamas</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Bejamas Product List" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <nav className="d-flex justify-content-between align-items-center py-3">
            <div>
              <img src={Logo} alt="Site Logo" />
            </div>

            <Button variant="light">
              <img src={CartIcon} alt="Cart" />
            </Button>
          </nav>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
