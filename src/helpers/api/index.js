import { defaultRequest } from "./defaultRequest";

export async function getProducts() {
  try {
    const products = await defaultRequest("https://fakestoreapi.com/products");

    return products;
  } catch (e) {
    throw e;
  }
}

export async function sendOrder() {
  try {
    // В чате скаали что какой запрос не имеет значения ¯\_(ツ)_/¯
    const products = await defaultRequest("https://fakestoreapi.com/products");

    return products;
  } catch (e) {
    throw e;
  }
}
