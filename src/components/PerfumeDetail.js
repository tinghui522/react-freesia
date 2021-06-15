import products from "../json/perfume.json"
import { Row, Col, Button } from "antd";
import ProductItem from "./ProductItem";
import { useContext, useRef } from "react";
import { StoreContext } from "../store"
import { Link } from "react-router-dom";

export default function PerfumeDetail() {
    const { dispatch } = useContext(StoreContext);
    const myRef = useRef<HTMLDivElement>(null);
    const next = () => {
        window.scrollBy(0,720);
      }
    return (
        <content className="content"> 
        <hr className="hr-line-productdetail" />
        <div className="perfume-title-bg">
        </div>
        <Link to="/Perfume">
         <p className="perfume-title">PERFUMES</p>
        </Link>
        <div className="perfume-detail">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/product-word.png?raw=true" className="product-word"/>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/jo-malone-london-blossoms-yuja-cologne.png?raw=true" className="product-img" />
            <Button type="text" onClick={next}>
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/up-arrow.png?raw=true"className="arrow-icon"/>
            </Button>
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
       </content>
    );
 }

 