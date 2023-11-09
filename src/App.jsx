import { useState } from "react";

const App = () => { 
  let [product, setProduct] = useState({
    name: "Comfortable Business Wedding Office Men Genuine Leather dress shoes Derby Shoes",
    price: 488.00,
    discount: 10,
    discount_type: "percent",
    reviews:192,
    rating: 4.92,
    stock: 0
  });

  const updateProduct = () => {
    setProduct(prevProduct=>({
      ...prevProduct,
      stock: 100
    }));
  }
  
  return (
    <div>
      <h3>{product.stock}</h3>
      <button onClick={updateProduct}>update product</button>
    </div>
  );
};

export default App;