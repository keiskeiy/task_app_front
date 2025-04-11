import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

export function Main() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            height: "50%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div style={{ color: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "20%", fontSize: "20px" }}>
            タスクを入力、もしくは選んでください
          </div>
        </Content>
      </Layout>
    </>
  );
}