import { useState } from "react";
import Form from "./Components/Form";
import Listitem from "./Components/Listitem";

interface data {
  id: number;
  text: string;
  isEdit: boolean;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<data[]>([]);
  const [edit, setEdit] = useState<data>({
    id: 0,
    text: "",
    isEdit: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (edit.isEdit) updateTodo();
    else {
      if (todo) {
        setTodos([...todos, { id: Date.now(), text: todo, isEdit: false }]);
        setTodo("");
      }
    }
  };

  const deleteTodo = (i: number) => {
    setTodos(
      todos.filter((d) => {
        if (d.id !== i) {
          return d;
        }
      })
    );
  };

  const editTodo = (da: data) => {
    setEdit({
      id: da.id,
      text: da.text,
      isEdit: true,
    });
  };

  const updateTodo = () => {
    setTodos(
      todos.map((i) => {
        if (i.id === edit.id) {
          return { ...edit, isEdit: false };
        } else {
          return i;
        }
      })
    );
    setEdit({
      id: 0,
      text: "",
      isEdit: false,
    });
  };

  return (
    <div>
      <Form
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
        edit={edit}
        setEdit={setEdit}
      />
      <div>
        <Listitem i={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
};

export default App;
