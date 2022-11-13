import { Component } from "react";

class IconAside extends Component {
  render() {
    const { url } = this.props;
    return (
      <input type='img' src={ url }/>        
    );
  }
}

export default IconAside;