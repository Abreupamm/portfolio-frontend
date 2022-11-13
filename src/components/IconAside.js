import { Component } from "react";

class IconAside extends Component {
  render() {
    const { url, name } = this.props;
    return (
      <input alt={ name } type='image' src={ url }/>        
    );
  }
}

export default IconAside;