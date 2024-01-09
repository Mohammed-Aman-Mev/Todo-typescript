import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  edit: { id: number; text: string; isEdit: boolean };
  setEdit: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; isEdit: boolean }>
  >;
}

const Form: React.FC<Props> = ({
  todo,
  setTodo,
  handleSubmit,
  edit,
  setEdit,
}) => {
  return (
    <div className="w-full bg-yellow-200 h-[100px] flex justify-center items-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
        className="p-2 mr-1"
          type="text"
          placeholder="Enter here"
          value={edit.isEdit ? edit.text : todo}
          onChange={(e) => {
            if (edit.isEdit) setEdit({ ...edit, text: e.target.value });
            else setTodo(e.target.value);
          }}
        />
        <button className="p-2 bg-blue-600 text-white rounded-sm" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
