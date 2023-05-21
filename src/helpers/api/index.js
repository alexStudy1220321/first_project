import { defaultRequest } from "./defaultRequest";

export async function getProducts() {
  try {
    const products = await defaultRequest("https://fakestoreapi.com/products");

    return products;
  } catch (e) {
    throw e;
  }
}
