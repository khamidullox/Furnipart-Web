export const fromatPrice = (price) => {
  if (!price) return "0";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
