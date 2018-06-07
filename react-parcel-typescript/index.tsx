import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return <div>Hello World!{this.props.name}</div>;
  }
}

ReactDOM.render(<App name={1234}/>, document.getElementById("app"));
