import { Typography, Divider } from 'antd'
import './App.css'
import TodoList from './components/TodoList'
import Filters from './components/Filters'

const { Title } = Typography

function App() {
  return (
    <div
      style={{
        width: 800,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F7F5EB',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  )
}

export default App
