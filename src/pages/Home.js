import { useContext, useEffect } from "react"; 
import { Layout } from 'antd';

import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Categoties from "../components/Categories";
import { StoreContext } from "../store";
import { getTitle } from "../utils";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";

const { Header ,Content ,Footer} = Layout;

function Home() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    pageContentsSet(dispatch, getTitle(url), getJSON(url));
    activeNavItemSet(dispatch, url);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps   
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar />
      </Layout>
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader title={title} />
        </Header>
        <Content>
          <Categoties/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter/>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
