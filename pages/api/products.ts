import { NextApiRequest, NextApiResponse } from "next";
import faker from "faker";
import { db } from "../../libs/firebase";
import { photos } from "../../photos";
import { getRandomCategory } from "../../helpers";
import { IProductProps } from "../../context/Products/types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const incomingProduct = req.body;

      await db.collection("mainProducts").add({
        ...incomingProduct,
        created: new Date().getTime(),
      });

      let products: IProductProps[] = [];

      photos.forEach(async (photo) => {
        const product: IProductProps = {
          name: faker.commerce.productName(),
          category: getRandomCategory(),
          price: Number(faker.commerce.price()),
          currency: "USD",
          image: photo,
          bestseller: faker.datatype.boolean(),
          featured: false,
          details: null,
        };

        await db.collection("mainProducts").add({ ...product, created: new Date().getTime() });

        products.push(product);
      });

      res.status(201).send({
        status: "success",
        data: [incomingProduct, ...products],
      });
    }

    if (req.method === "GET") {
      const snapshot = await db.collection("products").get();

      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      return res.status(200).send({
        status: "success",
        data,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};
