import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button ,Row, Col, Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { logoutFromFirebase, updateUserInfo,creatOrderByUid} from "../actions";
import { StoreContext } from "../store";

const ProfileCard = () => {
  const {state: {userSignin: { userInfo },  searchOrderDetailByUid: {
loading,
    order,
    error,
    tapOrNot
  },},dispatch,} = useContext(StoreContext);
 
  const { displayName, email } = userInfo;
  const history = useHistory();
  const [form] = Form.useForm();
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff",justifyContent: 'center',alignContent:'center' }} spin />;
  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };

  const handleOrderSearch = () => {
    console.log(order);
   creatOrderByUid(dispatch);
  };
  

  return (
    <div className="profile-form-wrapper">
      <hr className="hr-line-productdetail" />
    <Form
      onFinish={handleUpdate}
      name="normal_login"
      className="profile-form"
      form={form}
      initialValues={userInfo}
    >
      
      <Form.Item
        label="name: "
        name="name"
        rules={[
          {
            type: "string",
            message: "The input is not valid name!",
          },
          {
            message: "Please input your name!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={displayName} />
      </Form.Item>
      <Form.Item
        label="email: "
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={email} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="rePassword"
        label="Re-enter Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="profile-form__button1"
        >
          Submit
        </Button>
        <Button
          className="profile-form__button2"
          onClick={handleLogout}
        >
          Log out
        </Button>
        
      </Form.Item>
    </Form>
   <div class="profileOrder">
          <Button
            className="orderSearch_btn"
            onClick={handleOrderSearch}
          >
            Order List
          </Button>
   { tapOrNot?(loading
            ? (
               <div className="spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
              order.length===0?(<div className='eachOrder_title'><p>None</p></div>):(
              order.map((eachOrder,index)=>{return(
                <Row gutter={[0, 8]}>
                <Col         
                xs={{ span: 20, offset: 2 }}
                >
                  <div className="Order_title"><p>Order {index+1}</p></div>
                  </Col>
                <Col         
                xs={{ span: 20, offset: 2 }}
                lg={{ span: 9, offset: 3 }}
                >

                <div className="card card-body">
                  <h2 style={{ color: '#4d4d4d' }}>Shipping</h2>
                  <p>
                      <strong>Name:</strong> {eachOrder.shippingAddress.fullName} <br />
                      <strong>Address: </strong> {eachOrder.shippingAddress.address},
                      {eachOrder.shippingAddress.city}, {eachOrder.shippingAddress.postalCode}
                      ,{eachOrder.shippingAddress.country}
                  </p>
                </div>
                <div className="card card-body">
                  <h2 style={{ color: '#4d4d4d' }}>Payment</h2>
                  <p>
                      <strong>Method:</strong> {eachOrder.paymentMethod}
                  </p>
                </div>
                  
                <div className="card card-body">
                    <h2 style={{ color: '#4d4d4d' }}>Order Items</h2>
                    {
                        eachOrder.orderItems.map(item => (
                        <li key={item.id} className="order-item">
                          <div className="order-image">
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
                        }
                    <hr className="hr-line-order" />
                    <div className="total-price-wrap">
                      Total
                      <div className="order-total-price">${eachOrder.totalPrice}</div>
                    </div>
                </div>

                </Col>
                  <Col
                  xs={{ span: 20, offset: 2 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <div className="card card-body">
                      <h2 style={{ color: '#4d4d4d' }}>Order Summary</h2>
                      <div className="row">
                        <div>Items</div>
                        <div>${eachOrder.itemsPrice}</div>
                      </div>
                      <div className="row">
                        <div>Shipping</div>
                        <div>${eachOrder.shippingPrice}</div>
                      </div>
                      <div className="row">
                        <div>Tax</div>
                        <div>${eachOrder.taxPrice}</div>
                      </div>
                      <div className="row">
                        <div>
                            <strong> Order Total</strong>
                        </div>
                        <div>
                            <strong>${eachOrder.totalPrice}</strong>
                        </div>
                      </div>
                    
                  </div>
                </Col>     
                </Row>         
              )
            })
              )
            )
            ):(<div></div>)
                  }
            </div>
        
    </div>
  );
};
export default ProfileCard;