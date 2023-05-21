export async function defaultRequest(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.status > 300) {
      throw new Error(`Incorrect status ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    throw e;
  }
}
