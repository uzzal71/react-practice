const ProductList = (props) => {
    const {Item} = props;
    return (
        <div>
            <h1>Name: {Item.name}</h1>
            <p>Category: {Item.category}</p>
            <p>Price: {Item.price}</p>
            <p>Description: {Item.description}</p>
        </div>
    );
};

export default ProductList;