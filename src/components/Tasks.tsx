import { Card, List, Checkbox, CheckboxChangeEvent } from 'antd';

interface TaskProps {
  data: { title: string }[]
  deleteTask: (e: CheckboxChangeEvent, index: number) => void
}

export function Tasks({ data, deleteTask }: TaskProps) {

  return (
    <div style={{ color: "black", paddingLeft: '50px' }}>
      <></>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Card title={item.title} key={item.title}>
              <Checkbox onChange={(e) => deleteTask(e, index)}>
                Card content
              </Checkbox>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
