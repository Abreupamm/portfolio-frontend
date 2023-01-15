import { Component } from 'react';
import '../CSS/components/title.css';

class Title extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title } = this.props;
    return <h1 className="title-pages">{title}</h1>;
  }
}

export default Title;
