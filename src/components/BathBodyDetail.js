import products from "../json/bath.json"
import { Row, Col, Button,BackTop } from "antd";
import ProductItem from "./ProductItem";
import { useContext, useRef } from "react";
import { StoreContext } from "../store"
import { Link } from "react-router-dom";

export default function BathBodyDetail() {
    const { dispatch } = useContext(StoreContext);
    const myRef = useRef<HTMLDivElement>(null);
    return (
        <content className="content"> 
        <hr className="hr-line-productdetail" />
        <div className="perfume-title-bg">
        </div>
        <Link to="/Bath">
         <p className="perfume-title">BATH & BODY</p>
        </Link>
        <div className="product-bg">
            <div>
                <img src="/img/img_bathBanner.png" className="product-bg"/>
            </div>
            <div>
                <img src="/img/img_bathBanner2.png" className="product-bg"/> 
            </div>
            <div>
                <img src="/img/img_bathBanner3.png" className="product-bg"/>  
            </div>
        </div>
        <div>
            <div className="product-title-bg"></div>
                <p className="product-title">PRODUCTS</p>
            <Row gutter={[0,8]}>
                {products.map(product => (
                    <Col 
                    key={product.id} 
                    sm={{ span: 12 }} 
                    lg={{ span: 8 }}
                    xl={{ span: 7 }}
                    xxl={{ span: 2 }}
                    >
                    <ProductItem product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
        <div className="block1"></div>
        <BackTop/>
       </content>
    );
 }

 