import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

const ProductPage = () => {
    let {id, name} = useParams();

    return (
        <div>
            <Menu/>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>This is product page</h1>
        </div>
    );
};

export default ProductPage;