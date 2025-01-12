import { BaseTable, VALUE_TYPE_ENUM } from '@nb-antd-pro/components';
import { Button } from 'antd';

const App = () => {
  const column = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      valueType: VALUE_TYPE_ENUM.SELECT,
      valueEnum: [
        { label: 'John Brown', value: '1' },
        { label: 'Jim Green', value: '2' },
        { label: 'Joe Black', value: '3' },
      ],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      valueType: VALUE_TYPE_ENUM.MONEY,
    },
    {
      title: '操作',
      valueType: VALUE_TYPE_ENUM.OPTION,
      key: 'option',
      dataIndex: 'option',
      options: [
        {
          key: 'edit',
        },
        {
          key: 'delete',
        },
        {
          key: 'detail',
        },
      ],
    },
  ];

  const data = [
    {
      name: '1',
      age: 32,
      key: 1,
    },
    {
      name: '1',
      age: 42,
      key: 2,
    },
    {
      name: '2',
      age: 32,
      key: 3,
    },
  ];

  return (
    <div>
      <BaseTable
        column={column}
        data={data}
        toolBar={{
          ControlsNode: (
            <>
              <Button>toolBar自定义按钮</Button>
            </>
          ),
        }}
      />
    </div>
  );
};

export default App;
