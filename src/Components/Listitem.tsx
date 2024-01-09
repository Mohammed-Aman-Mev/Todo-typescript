import React from "react";
import Item from "./Item";

interface Props {
  i: { id: number; text: string; isEdit: boolean }[];
  deleteTodo: (i: number) => void;
  editTodo: (i: { id: number; text: string; isEdit: boolean }) => void;
}

const Listitem: React.FC<Props> = ({ i, deleteTodo, editTodo }) => {
  return (
    <div className="w-full bg-blue-400 flex-col items-center justify-center p-8">
      <h1>Item is here</h1>
      {i.map((d: { id: number; text: string; isEdit: boolean }, j: number) => (
        <Item data={d} key={j} deleteTodo={deleteTodo} editTodo={editTodo}/>
      ))}
    </div>
  );
};

export default Listitem;
