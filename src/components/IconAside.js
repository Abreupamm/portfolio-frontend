import { Component } from 'react';
import '../CSS/components/aside.css';

class IconAside extends Component {
  handleOnClick = () => {
    const { page, history } = this.props;

    page === 'home' ? history.push('/') : history.push(`/${page}`);
  };

  render() {
    const { urlIcon, name } = this.props;
    return (
      <div className="container-icon">
        <input
          className="icon"
          alt={name}
          type="image"
          src={urlIcon}
          onClick={this.handleOnClick}
        />
        <span className="description">{name}</span>
      </div>
    );
  }
}

export default IconAside;
