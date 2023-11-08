import Hero from "./component/Hero";
import MyButton from "./component/MyButton";
import ProductList from "./component/ProductList";

const App = () => { 
  const ItemObj= {
    id: 1,
    name: "Product 1",
    description: "This is the description",
    price: 19.99,
    category: "Category 1"
  }
  const handleClick = () => {
    alert("Button clicked!");
  }
  return (
    <div>
      <Hero title="Learn react" description="In details how to pass props"/>
      <ProductList Item={ItemObj}/>
      <MyButton handleClick={handleClick}/>
    </div>
  );
};

export default App;