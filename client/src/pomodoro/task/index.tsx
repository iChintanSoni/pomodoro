import "./index.css";

import React, { memo, useState } from "react";
import Text from "./../../components/Text";
import IconButton from "./../../components/IconButton";

interface TaskProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Task: React.FC<TaskProps> = (props) => {
  const [text, setText] = useState<string>("");
  const [editable, setEditable] = useState<boolean>(false);
  const toggleEditable = () => {
    setEditable(!editable);
  };
  const onSave = (value: string) => {
    setText(value);
    toggleEditable();
  };
  return (
    <div className="Task" {...props}>
      <span className="material-symbols-outlined material-symbols-outlined-1">
        check_circle
      </span>
      <Text variant="h6">{text.length ? "YOUR FOCUS" : "SET YOUR FOCUS"}</Text>
      {text.length === 0 && (
        <Text variant="caption">
          Focusing on one task at a time can have a huge impact on your
          productivity.
        </Text>
      )}
      <div>
        {editable ? (
          <TaskInput text={text} onSave={onSave} onDiscard={toggleEditable} />
        ) : (
          <Text variant="sub-title-1" onClick={toggleEditable}>
            {text.length ? text : "Set the one task you'll be focusing on..."}
          </Text>
        )}
      </div>
    </div>
  );
};

interface TaskInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text: string;
  onSave: (value: string) => void;
  onDiscard: () => void;
}

const TaskInput = memo<TaskInputProps>((props) => {
  const [text, setText] = useState<string>(props.text);

  return (
    <div className="input-div">
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <div className="actions">
        <IconButton icon="done" onClick={() => props.onSave(text)} />
        <IconButton icon="close" onClick={() => props.onDiscard()} />
      </div>
    </div>
  );
});

export default Task;
