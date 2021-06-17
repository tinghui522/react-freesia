import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Spin, Button } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import GooglePayButton from '@google-pay/button-react';
import { requestOrderDetail } from "../actions"
import { StoreContext } from "../store";

export default function OrderCard({ orderId }) {
   const { state: { orderDetail: { loading, order } }, dispatch } = useContext(StoreContext);
   const { orderItems } = order;
   const history = useHistory()
   const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

   const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"]
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example"
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant"
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: String(order.totalPrice),
        currencyCode: "USD",
        countryCode: "US"
      }
    };

   useEffect(() => {
      requestOrderDetail(dispatch, orderId)
   }, [orderId])

   return (
      <>
         {loading ? (
               <div className="spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
               <Row gutter={[0, 8]}>
                  <Col
                     xs={{ span: 20, offset: 2 }}
                     lg={{ span: 9, offset: 3 }}
                  >
                     <div className="card card-body">
                        <h2 style={{ color: '#4d4d4d' }}>Shipping</h2>
                        <p>
                           <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                           <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                  ,{order.shippingAddress.country}
                        </p>
                     </div>
                     <div className="card card-body">
                        <h2 style={{ color: '#4d4d4d' }}>Payment</h2>
                        <p>
                           <strong>Method:</strong> {order.paymentMethod}
                        </p>
                     </div>
                     <div className="card card-body">
                        <h2 style={{ color: '#4d4d4d' }}>Order Items</h2>
                        {orderItems.length === 0 ? (
                           <div>Cart is empty</div>
                        ) : (
                           orderItems.map(item => (
                              <li key={item.id} className="order-item">
                                 <div className="cart-image">
                                    <img src={item.image} alt={item.name} />
                                 </div>
                                    <div className="order-name">{item.name}</div>
                                    <div className="order-name">
                                    Qty: {item.qty}
                                    </div>
                                    <div className="order-name">
                                    ${item.price * item.qty}
                                    </div>
                              </li>
                           ))
                        )}
                        <hr className="hr-line-order" />
                        <div className="total-price-wrap">
                           Total
                           <div className="order-total-price">${order.totalPrice}</div>
                        </div>
                     </div>

                  </Col>
                  <Col
                     xs={{ span: 20, offset: 2 }}
                     lg={{ span: 7, offset: 0 }}
                  >
                     <div className="card card-body">
                        <h2 style={{ color: '#4d4d4d' }}>Order Summary</h2>
                        <div className="row">
                           <div>Items</div>
                           <div>${order.itemsPrice}</div>
                        </div>
                        <div className="row">
                           <div>Shipping</div>
                           <div>${order.shippingPrice}</div>
                        </div>
                        <div className="row">
                           <div>Tax</div>
                           <div>${order.taxPrice}</div>
                        </div>
                        <div className="row">
                           <div>
                              <strong> Order Total</strong>
                           </div>
                           <div>
                              <strong>${order.totalPrice}</strong>
                           </div>
                        </div>
                        <GooglePayButton
                           environment="TEST"
                           buttonColor="black"
                           paymentRequest={paymentRequest}
                           onLoadPaymentData={paymentRequest => {
                              console.log('load payment data', paymentRequest);
                              history.push('/');
                           }}
                        />
                     </div>

                  </Col>
               </Row>
               
            )
            
         }
         
         <div className="block2"></div>
      </>
   );
}