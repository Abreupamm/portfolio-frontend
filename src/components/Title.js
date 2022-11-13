import { Component } from "react";
import '../CSS/title.css';

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <h1 className="title-pages">{ title }</h1>
    );
  }
}

export default Title;