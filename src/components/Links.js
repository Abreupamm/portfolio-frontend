import { Component } from 'react';
import iconGitHub from '../images/github.png';
import iconLinkedin from '../images/linkedin.png';
import '../CSS/components/links.css';

class Links extends Component {
  handleOnClick = ({ target: { alt } }) => {
    alt === 'icon github'
      ? window.location.replace('https://github.com/Abreupamm')
      : window.location.replace(
          'https://www.linkedin.com/in/pamela-silva-de-abreu/'
        );
  };

  render() {
    return (
      < div className='container-links-redes'>
        <input
          className="links-redes"
          type="image"
          alt="icon github"
          src={iconGitHub}
          onClick={this.handleOnClick}
        />
        <input
          className="links-redes"
          type="image"
          alt="icon linkedin"
          src={iconLinkedin}
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}

export default Links;
