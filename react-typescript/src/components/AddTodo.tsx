/**
 * @Component AddTodo
 * @author < stack fizz ---- huangchaolin@xylink.com >
 */

import * as React from "react";

export interface AddTodoProps {
  onAddClick: Function;
}
export interface AddTodoState {}

export class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
  }

  public render() {
    return <div>AddTodo</div>;
  }
}

export default AddTodo;
