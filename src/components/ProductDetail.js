import { useContext, useState } from "react";
import { Select, Row, Col} from "antd";
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";
import { Link } from "react-router-dom";

const { Option } = Select;

function ProductDetail() {
   const { state: { productDetail: { product, qty} }, dispatch } = useContext(StoreContext);
   
   return (
      <content className="content"> 
      <hr className="hr-line-productdetail" />
      <div className="perfume-title-bg">
      </div>
         <p className="perfume-title">{product.title}</p>
      <Row gutter={[0, 8]}>
         <Col
            lg={{ span: 6, offset: 2 }}
         >
            <img
               alt=""
               className="product-image"
               src={product.image}
            />
         </Col>
         <Col
            lg={{ span: 12 }}
         >
            <div className="product-info--detail">
               <div className="backcolor-product-category1">
               <h4 className="product-category">
                  {product.category}
               </h4>
               </div>
               <hr className="hr-line-productdetail1" />
               <h2 className="product-name product-name--large">
                  {product.name}
               </h2>
               <hr className="hr-line-productdetail1" />
               <p className="product-description">{product.description}</p>
               <hr className="hr-line-productdetail2" />
                  <div className="product-price-wrap">
                  <p className="product-qty">
                     Qty: {"   "}
                     <Select 
                        defaultValue={qty}
                        value={qty}
                        className="select-style"
                        onChange={val => setProductDetail(dispatch, product.id, val, product.category)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </p>
                  <p className="product-size">
                     Size: {product.Size}
                  </p>
               </div>
               <hr className="hr-line-productdetail3" />
               <div className="product-price-wrap">
                  <p className="product-status">
                     Availability: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                  </p>
                  <p className="product-price product-price--large">
                  ${product.price}.00
                  </p>
               </div>
               <AddToCart product={product}  qty={qty}/>
            </div>
         </Col>
      </Row>
      <div className="test">
      <hr className="hr-line-productdetail4" />
         <p className="test-title">{product.Use}</p>
         <p className="test-description">{product.detail}</p>
        </div>
        <div use-img>
         <img src={product.useImg1} className="use-img1"/>
         <img src={product.useImg2} className="use-img2"/>
        </div>
        <div className="works">
        <hr className="hr-line-productdetail-works" />
            <p className="works-title">How Does It Work</p>
            <h4 className="works-detail">{product.Work}</h4>
        </div>
      </content>
   );
}

export default ProductDetail;