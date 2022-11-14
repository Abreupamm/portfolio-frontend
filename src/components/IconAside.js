import { Component } from 'react';
import '../CSS/components/aside.css';

class IconAside extends Component {
  handleOnClick = () => {
    const { name, history } = this.props;

    name === 'home' ? history.push('/') : history.push(`/${name}`);
  };

  render() {
    const { url, name } = this.props;
    return (
      <div className="container-icon">
        <input
          className="icon"
          alt={name}
          type="image"
          src={url}
          onClick={this.handleOnClick}
        />
        <span className="description">{name}</span>
      </div>
    );
  }
}

export default IconAside;
