const name = "luffy";
const age = 22;
const user = {
  name,
  age,
  location: "India",
};
console.log(user);

//Object Destructuring...
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const { label, price } = product;
// console.log(label, price);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
