import React, { Component } from "react";
import "./Fullpage.css";

class FullPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={`fullpage ${this.props.className || ""}`}>{children}</div>
    );
  }
}
export default FullPage;
