import { Component } from 'react';
import { HeaderStyle } from './style';
import myLogo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <div>
          <img alt="" src={ myLogo } />
          <nav>
            <a href="#sobre-mim">Sobre mim</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
