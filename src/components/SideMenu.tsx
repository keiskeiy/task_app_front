import Sider from "antd/es/layout/Sider";
import { Menu, MenuProps, Input } from "antd";
import { Navigate, useNavigate } from "react-router";
import { useState } from "react";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useTodoContext } from "./TodoContext.tsx";

type ItemType = {
  key: string;
  label: string;
}

export function SideMenu() {
  const { allTodoList, setAllTodoList } = useTodoContext();
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

  const deleteTodoList = (key: string) => {
    const newTodoList = todoList.filter((item) => item.key !== key);
    for (let i = Number(key) - 1; i < newTodoList.length; i++) {
      newTodoList[i].key = (i - 1).toString();
    }
    setTodoList(newTodoList);
    console.log(allTodoList)
    setAllTodoList((prev) => {
      const newList = { ...prev };
      delete newList[key];
      return newList;
    });
    navigate(`/main`);
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
        items={todoList.map((item) => ({
          key: item.key,
          label: (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{item.label}</span>
              <DeleteOutlined
                onClick={(e) => {
                  e.stopPropagation(); // メニューのクリックイベントを防ぐ
                  deleteTodoList(item.key);
                  Navigate
                }}
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>
          )
        }))}
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
            />
          </div>}
      </div>
    </Sider>
  );
}