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
      <Text variant="h6">UNO FOCUS</Text>
      {text.length === 0 && (
        <Text variant="caption">
          human brain is a uni-processor system. one task, at one time, with
          complete focus is the goal.
        </Text>
      )}
      {editable ? (
        <TaskInput text={text} onSave={onSave} onDiscard={toggleEditable} />
      ) : (
        <Text
          variant="sub-title-1"
          className="one-task sub-title-1"
          onClick={toggleEditable}
        >
          {text.length ? text : "what's that one task today?"}
        </Text>
      )}
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
