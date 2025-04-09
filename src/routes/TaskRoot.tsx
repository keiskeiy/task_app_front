import { Layout } from 'antd';
import {  Outlet } from "react-router";
import { SideMenu } from "../components/SideMenu.tsx";
const { Header, Footer } = Layout;

export function TaskRoot() {

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: "white", fontWeight: "bold", fontSize: "20px", marginLeft: "10px" }}>
          Todo List
        </div>
      </Header>
      <Layout>
        <SideMenu/>
        <Layout style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Layout>
            <Outlet/>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created keisuky
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
