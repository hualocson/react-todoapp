import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  prioritiesFilterChange,
  searchFilterChange,
  statusFilterChange,
} from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriorities, setFilterPriorities] = useState([]);
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };
  const handleFilterPrioritiesChange = (value) => {
    setFilterPriorities(value);
    dispatch(prioritiesFilterChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{
            color: "#f8f9fa",
            fontWeight: "bold",
            marginBottom: 3,
            marginTop: 10,
          }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{
            color: "#f8f9fa",
            fontWeight: "bold",
            marginBottom: 3,
            marginTop: 10,
          }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio
            value="All"
            style={{
              color: "#f8f9fa",
            }}
          >
            All
          </Radio>
          <Radio
            value="Completed"
            style={{
              color: "#f8f9fa",
            }}
          >
            Completed
          </Radio>
          <Radio
            value="Todo"
            style={{
              color: "#f8f9fa",
            }}
          >
            To do
          </Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{
            color: "#f8f9fa",
            fontWeight: "bold",
            marginBottom: 3,
            marginTop: 10,
          }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriorities}
          onChange={handleFilterPrioritiesChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="#FD8A8A" style={{ color: "#000" }}>
              High
            </Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="#F1F7B5" style={{ color: "#000" }}>
              Medium
            </Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="#A8D1D1" style={{ color: "#000" }}>
              Low
            </Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
