/**
 * @Component AppContainer
 * @author < stack fizz ---- huangchaolin@xylink.com >
 */

import * as React from "react";

import { addTodo } from "../actions/index";
import { AddTodo } from "./AddTodo";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";

class AppContainer extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <AddTodo onAddClick={this.onAddClick} />
        <TodoList />
        <Footer />
      </div>
    );
  }

  public onAddClick = (text: string) => {
    const { dispatch } = this.props;
    dispatch(addTodo(text));
  };
}

export default AppContainer;
