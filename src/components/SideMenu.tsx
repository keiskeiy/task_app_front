import Sider from "antd/es/layout/Sider";
import { Menu, MenuProps, Input } from "antd";
import { useNavigate } from "react-router";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

type ItemType = {
  key: string;
  label: string;
}

export function SideMenu() {
  const [todoList, setTodoList] = useState<ItemType[]>([]);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("");
  const [isForm, setIsForm] = useState(false);
  const [input, setInput] = useState("");

  const handleClick: MenuProps['onClick'] = (e) => {
    const key = e.key;
    const item = todoList[Number(key) - 1]
    if (item != null && item.label != null) {
      navigate(`/todos/${todoList[Number(key) - 1].label}`);
    }
  };

  const addTodoList = () => {
    setIsForm(true);
  }

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
      style={{
        maxHeight: "100vh",
        overflowY: "auto",
        paddingRight: "8px",
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
      <div style={{ cursor: "pointer" }}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}>
        {!isForm && <PlusCircleOutlined
          onClick={addTodoList}
          style={{
            zIndex: 1000,
            paddingTop: "10px",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            color: hover ? "#1890ff" : undefined, // hover時の色変更
            filter: hover ? "brightness(0.8)" : "none"
          }}
        />}
        {isForm &&
          <div style={{ paddingLeft: "5px", paddingTop: "1px", paddingRight: "5px" }}>
            <Input.TextArea
              value={input}
              rows={2}
              style={{ height: "40px", width: "100%", fontSize: "14px" }}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={(e) => {
                // shiftを押しながらEnterを押した場合は改行なのでそれ以外の場合は送信
                if (!e.shiftKey) {
                  // 何も入力されなかったケース
                  if (input === "") {
                    setIsForm(false);
                    setInput("");
                    setSelectedKey("")
                    return
                  }
                  e.preventDefault();
                  const newKey = (todoList.length + 1).toString();
                  setTodoList((prev) => [
                    ...prev,
                    { key: newKey, label: input },
                  ]);
                  setIsForm(false);
                  setInput("");
                  setSelectedKey("")
                }
              }}
              placeholder="Todoリスト名を入力..."
            /></div>}
      </div>
    </Sider>
  );
}