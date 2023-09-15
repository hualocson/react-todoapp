import { Row, Tag, Checkbox, Tooltip, Button, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTodoName,
  removeTodo,
  toggleTodoStatus,
} from "../../redux/actions";
import {
  EditOutlined,
  CloseCircleOutlined,
  DeleteFilled,
} from "@ant-design/icons";

const priorityColorMapping = {
  High: "#FD8A8A",
  Medium: "#F1F7B5",
  Low: "#A8D1D1",
};

export default function Todo({ id, name, priority, completed }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const [isEditing, setIsEditing] = useState(false);

  const [todoName, setTodoName] = useState(name);

  const [error, setError] = useState(false);

  const onNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const onUpdate = () => {
    if (todoName === "") return setError(true);
    if (isEditing) dispatch(editTodoName({ id, name: todoName }));
    setIsEditing(false);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };

  const handleOnRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { textDecoration: "line-through" } : {}),
      }}
      wrap={false}
    >
      {isEditing ? (
        <>
          <Input
            defaultValue={name}
            allowClear={true}
            onChange={onNameChange}
            status={error && "error"}
            placeholder={error ? "Please enter todo name" : "Enter todo name"}
          />
          <Button type="primary" onClick={onUpdate}>
            Update
          </Button>
        </>
      ) : (
        <Checkbox
          style={{ color: "#f8f9fa" }}
          checked={checked}
          onChange={toggleCheckbox}
        >
          {name}
        </Checkbox>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingLeft: 10,
        }}
      >
        <Tag
          color={priorityColorMapping[priority]}
          style={{ margin: 0, color: "#000" }}
        >
          {priority}
        </Tag>
        <Tooltip title={isEditing ? "close" : "edit"}>
          <Button
            type="primary"
            shape="circle"
            icon={isEditing ? <CloseCircleOutlined /> : <EditOutlined />}
            disabled={checked}
            onClick={() => {
              setError(false);
              setIsEditing((prev) => !prev);
            }}
          />
        </Tooltip>
        <Tooltip title={"remove"}>
          <Button
            type="danger"
            shape="circle"
            icon={<DeleteFilled />}
            onClick={handleOnRemove}
          />
        </Tooltip>
      </div>
    </Row>
  );
}
