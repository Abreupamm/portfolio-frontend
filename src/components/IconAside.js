import { Component } from 'react';

class IconAside extends Component {
  handleOnClick = () => {
    const { name, history } = this.props;
    console.log(history);

    name === 'home' ? history.push('/') : history.push(`/${name}`);
  };

  render() {
    const { url, name } = this.props;
    return (
      <input alt={name} type="image" src={url} onClick={this.handleOnClick} />
    );
  }
}

export default IconAside;
