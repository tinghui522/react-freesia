import { useContext, useEffect } from "react"; 
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import DiffuserDetail from "../components/DiffuserDetail";
import { StoreContext } from "../store";
import { getTitle } from "../utils";
import { setPage } from "../actions";

const { Header ,Content ,Footer} = Layout;

function Diffuser() {
  const { state: { dispatch } } = useContext(StoreContext);
  
  useEffect(() => {
    const url = window.location.pathname;
  }, []);
  
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar />
      </Layout>
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader title="Freesia" />
        </Header>
        <Content className="layout-content">
            <DiffuserDetail/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter/>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Diffuser;
