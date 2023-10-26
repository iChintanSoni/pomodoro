import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  title: string;
  actualPomodoros: number;
  estimatedPomodoros: number;
  notes: string;
  completed: boolean;
  createdDate: string;
  updatedDate: string;
}

export const newTask = (): Task => ({
  id: "",
  title: "",
  actualPomodoros: 0,
  estimatedPomodoros: 0,
  notes: "",
  completed: false,
  createdDate: new Date().toISOString(),
  updatedDate: new Date().toISOString(),
});

interface Tasks {
  tasks: Task[];
}

const initialState: Tasks = {
  tasks: [],
};

const sliceName = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Partial<Task>>) => {
      const task: Task = {
        id: uuidv4(),
        title: payload.title ?? "",
        actualPomodoros: payload.actualPomodoros ?? 0,
        estimatedPomodoros: payload.estimatedPomodoros ?? 0,
        notes: payload.notes ?? "",
        completed: false,
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString(),
      };
      state.tasks.push(task);
    },
    update: (state, { payload }: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      if (index > -1) {
        state.tasks[index] = {
          ...payload,
          updatedDate: new Date().toISOString(),
        };
      }
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === payload);
      if (index > -1) {
        state.tasks.splice(index, 1);
      }
    },
    toggleComplete: (state, { payload }: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === payload);
      if (index > -1) {
        const completed = state.tasks[index].completed;
        state.tasks[index] = {
          ...state.tasks[index],
          completed: !completed,
          updatedDate: new Date().toISOString(),
        };
      }
    },
  },
});

export const { add, update, remove, toggleComplete } = sliceName.actions;
export default sliceName.reducer;
