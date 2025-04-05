import Sider from "antd/es/layout/Sider";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router";
import { ItemType } from "antd/es/menu/interface";
import { useState } from "react";

const todoList: ItemType[] = [{ key: "1", label: "Todo 1" }, { key: "2", label: "Todo 2" }, {
  key: "3",
  label: "Todo 3"
}];

export function SideMenu() {

  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('1');

  const handleClick: MenuProps['onClick'] = (e) => {
    const key = e.key;
    setSelectedKey(key);
    navigate(`/todos/${key}`);
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical"/>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleClick}
        items={todoList}
      />
    </Sider>
  );
}