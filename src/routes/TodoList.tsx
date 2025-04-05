import {　useParams } from "react-router";
import { Breadcrumb, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

export function TodoList({}) {
  const { todoId } = useParams();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb
        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        style={{ margin: '16px 0' }}
      />
      <Content
        style={{
          padding: 24,
          margin: 0,
          height: "50%",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div>
          <h1>Todoリスト</h1>
          <p>Todoリストの詳細</p>
          <p>Todo ID: {todoId}</p>
        </div>
      </Content>
    </Layout>
  );
}