import { useParams } from "react-router";
import { Button, CheckboxChangeEvent, Input, Layout, Modal, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Tasks } from "../components/Tasks.tsx";
import { useState } from "react";


export function TodoList({}) {

  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];

  const { todoId } = useParams();
  const [tasks, setTasks] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const addTodo = (addData: { title: string }) => {
    setTasks([...tasks, addData]); // 新しい配列を作る
  }

  const deleteTask = (e: CheckboxChangeEvent, index: number) => {
    if (e.target.checked) {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }
  };

  return (
    <Layout style={{ padding: '24px 24px 24px' }}>
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
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: "20px",
          }}>
            <h1 style={{ paddingRight: "30px" }}>Todoリスト{todoId}</h1>
            <Button color="default" variant="solid" onClick={() => setIsModalOpen(true)}>
              Todoを追加
            </Button>
            <Modal
              title="新しいTodo"
              open={isModalOpen}
              onOk={() => {
                addTodo({ title: inputValue });
                setIsModalOpen(false);
                setInputValue("");
              }}
              style={{ alignItems: "center" }}
              onCancel={() => setIsModalOpen(false)}
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="タスク内容を入力"
              />
            </Modal>
          </div>
          <Tasks data={tasks} deleteTask={deleteTask}/>
        </div>
      </Content>
    </Layout>
  );
}