/**
 * @Component AppContainer
 * @author < stack fizz ---- huangchaolin@xylink.com >
 */

import * as React from "react";

class AppContainer extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        AppContainer Hello world
        <div>const CleanWebpackPlugin = require('clean-webpack-plugin');</div>
        <div>heelo</div>
      </div>
    );
  }
}

export default AppContainer;
