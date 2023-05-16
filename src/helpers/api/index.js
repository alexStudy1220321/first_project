import { defaultRequest } from "./defaultRequest";

export async function getProducts() {
  try {
    const response = await defaultRequest("https://fakestoreapi.com/products");
    const products = await response.json();

    return products;
  } catch (e) {
    throw e;
  }
}
