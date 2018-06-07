/**
 * @Component TodoList
 * @author < stack fizz ---- huangchaolin@xylink.com >
 */

import * as React from "react";

export interface TodoListProps {}
export interface TodoListState {}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
  }

  public render() {
    return <div>TodoList</div>;
  }
}

export default TodoList;
