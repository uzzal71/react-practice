import Hero from "./component/Hero";
import ProductList from "./component/ProductList";

const App = () => { 
  const ItemObj= {
    id: 1,
    name: "Product 1",
    description: "This is the description",
    price: 19.99,
    category: "Category 1"
  }
  return (
    <div>
      <Hero title="Learn react" description="In details how to pass props"/>
      <ProductList Item={ItemObj}/>
    </div>
  );
};

export default App;