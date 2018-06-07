/**
 * @Component Footer
 * @author < stack fizz ---- huangchaolin@xylink.com >
 */

import * as React from "react";

export interface FooterProps {}
export interface FooterState {}

export class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
  }

  public render() {
    return <div>Footer</div>;
  }
}

export default Footer;
