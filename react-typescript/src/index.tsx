import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App name="stack fizz" />, document.getElementById("app"));

if ((module as any).hot) {
  (module as any).hot.accept();
}
