import { ConfigProvider } from "antd";
import locale from "antd/locale/ja_JP";
import dayjs from "dayjs";

import "dayjs/locale/ja";
import { RouterProvider } from "react-router";
import { router } from "./routes";

dayjs.locale("ja");

export default function App() {
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: "#1e40af",
          fontSize: 16,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
