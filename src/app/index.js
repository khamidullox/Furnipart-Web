export let fromatPrice = (price) => {
  let newFormat = new Intl.NumberFormat("uz-UZ", {
    currency: "USD",
    style: "currency",
  }).format(price);
  return newFormat;
};

export function filterCategor(data, params) {
  if (data) {
    let filter = data.filter((product) => {
      if (params == "all") {
        return data;
      }
      return product.category == params;
    });

    return filter;
  }
}
