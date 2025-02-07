import TodoItem from "./TodoItem"

const TodoList = ({ todos, onCompleted, onRemoveTodo }) => {
  // TODO: 01 - Separar el siguiente li en un componente llamada TodoItem.jsx

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleted={onCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList