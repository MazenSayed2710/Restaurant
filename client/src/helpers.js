export const checkIfExist = (data, item) => {
  if (!data.length) return [item];

  const index = data.findIndex((e) => e.id === item.id && e.size === item.size);

  if (index === -1) {
    return [...data, item];
  } else {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      quantity: newData[index].quantity + 1,
    };
    return newData;
  }
};
export function filterProducts(products) {
  const typeCounts = {};
  const filteredProducts = [];

  products?.forEach((product) => {
    const productType = product.type;

    if (!typeCounts[productType]) {
      typeCounts[productType] = 1;
    } else {
      typeCounts[productType]++;
    }

    if (typeCounts[productType] <= 2) {
      filteredProducts.push(product);
    }
  });

  return filteredProducts;
}
