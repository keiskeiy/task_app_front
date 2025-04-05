import { Breadcrumb, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

export function Main() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
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
          Content
        </Content>
      </Layout>
    </>
  );
}