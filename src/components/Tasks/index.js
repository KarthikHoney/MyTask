import {TaskName, TagsCategory, ListItem} from './style'

const Tasks = props => {
  const {taskDetails} = props
  const {taskInput, taskCategory} = taskDetails

  return (
    <ListItem>
      <TaskName>{taskInput}</TaskName>
      <TagsCategory>{taskCategory}</TagsCategory>
    </ListItem>
  )
}

export default Tasks
