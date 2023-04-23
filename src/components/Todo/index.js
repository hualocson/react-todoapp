import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodoStatus } from '../../redux/actions'

const priorityColorMapping = {
  High: '#FD8A8A',
  Medium: '#F1F7B5',
  Low: '#A8D1D1',
}

export default function Todo({ id, name, priority, completed }) {
  const dispatch = useDispatch()

  const [checked, setChecked] = useState(completed)

  const toggleCheckbox = () => {
    setChecked(!checked)
    dispatch(toggleTodoStatus(id))
  }

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag
        color={priorityColorMapping[priority]}
        style={{ margin: 0, color: '#000' }}
      >
        {priority}
      </Tag>
    </Row>
  )
}
