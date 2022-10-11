const url = "http://localhost:5000/api/";
const getProducts = () => {
  return fetch(`${url}product`).then((res) => res.json())
};

const getProductById = (id) => {
  return fetch(`${url}product/${id}`).then((res) => res.json());
};

const deleteProduct = (productId) => {
  return fetch(`${url}product?id=${productId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const updateProduct = (body) => {
  return fetch(`${url}product`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

const newProduct = (body) => {
  return fetch(`${url}product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  newProduct,
};
