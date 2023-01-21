import { Component } from 'react';
import iconGitHub from '../../images/github.png';
import iconLinkedin from '../../images/linkedin.png';
import { ContainerLinks } from './style';

class LinksProfile extends Component {
  handleOnClick = ({ target: { alt } }) => {
    if (alt === 'icon github') return window.open('https://github.com/Abreupamm');
    return window.open('https://www.linkedin.com/in/pamela-silva-de-abreu/');
  };

  render() {
    return (
      <ContainerLinks>
        <input
          type="image"
          alt="icon linkedin"
          src={ iconLinkedin }
          onClick={ this.handleOnClick }
        />
        <input
          type="image"
          alt="icon github"
          src={ iconGitHub }
          onClick={ this.handleOnClick }
        />
      </ContainerLinks>
    );
  }
}

export default LinksProfile;
