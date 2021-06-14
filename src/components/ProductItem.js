import { useContext } from "react";
import { Card } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

export default function ProductItem({ product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <Card className="bg-gray product">
            <Link to={`/product/${product.id}`}
                onClick={() => {
                    setProductDetail(dispatch, product.id, 1);
                }}
            >
                <img
                    style={{ width: '80%' }}
                    src={product.image}
                    alt={product.name} className="product-item"/>
            </Link>
            <div className="product-info">
                <div className="backcolor-product-category">
                <h3 className="product-category">
                    {product.category}
                </h3>
                </div>
                <h3 className="product-name">
                    {product.name}
                </h3>
                <div className="product-more">
                    
                    <span
                        className="product-price">
                        USD {product.price}.00
                    </span>
                </div>
            </div>
        </Card>
    );
}
