import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 800,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#dee2e620",
        backdropFilter: "blur(30px)",
        border: "1px solid #dee2e630",
        padding: 20,
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center", color: "#f8f9fa" }}>Todo List</Title>
      <Filters />
      <Divider
        style={{
          backgroundColor: "#f8f9fa",
        }}
      />
      <TodoList />
    </div>
  );
}

export default App;
