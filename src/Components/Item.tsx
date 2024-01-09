import React from "react";

interface Props {
  data: {
    id: number;
    text: string;
    isEdit: boolean;
  };
  deleteTodo: (i: number) => void;
  editTodo: (i: { id: number; text: string; isEdit: boolean }) => void;
}

const Item: React.FC<Props> = ({ data, deleteTodo, editTodo }) => {
  return (
    <div className="bg-yellow-200 flex justify-between p-5 mt-1">
      {data.text}
      <div className="bg-sky-600 text-white p-2">
        <button
          className="mx-3 bg-fuchsia-500 p-1"
          onClick={() => deleteTodo(data.id)}
        >
          del
        </button>
        <button
          className="mx-3 bg-fuchsia-500 p-1"
          onClick={() => editTodo(data)}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default Item;
