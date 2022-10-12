import { deleteProduct } from "../services/apiServices";

export function deleteProductFunction(id) {
  deleteProduct(id).then((res) => {});
}

export const sortByCount = (products) => {
  const sorted = products.sort((a, b) => {
    if (a.rating.count < b.rating.count) {
      return 1;
    } else if (a.rating.count > b.rating.count) {
      return -1;
    } else {
      return 0;
    }
  });
  return sorted;
};

export const sortByStock = (products) => {
  const sorted = products.sort((a, b) => {
    if (a.stock < b.stock) {
      return 1;
    } else if (a.stock > b.stock) {
      return -1;
    } else {
      return 0;
    }
  });
  return sorted;
};

export const orderByHighPrice = (arrayData) => {
  return arrayData.sort((a, b) =>
    a.price < b.price ? 1 : a.price > b.price ? -1 : 0
  );
};

export const orderByLowPrice = (arrayData) => {
  return arrayData.sort((a, b) =>
    a.price > b.price ? 1 : a.price < b.price ? -1 : 0
  );
};

export const orderByMostRelevants = (arrayData) => {
  return arrayData.sort((a, b) =>
    a.rating.count < b.rating.count
      ? 1
      : a.rating.count > b.rating.count
      ? -1
      : 0
  );
};


export const orderByAlphabet = (arrayData) => {
  return arrayData.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase()
      ? 1
      : a.title.toLowerCase() < b.title.toLowerCase()
      ? -1
      : 0
  );
};