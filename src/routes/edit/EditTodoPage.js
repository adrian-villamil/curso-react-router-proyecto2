import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);
  const location = useLocation();

  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  let todoText;

  if (location.state?.todoText) {
    todoText = location.state.todoText;
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label='Edita tu TODO'
      defaultTodoText={todoText}
      submitText='Editar'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };