import { Component } from 'react';
import '../CSS/aside.css';
import IconAside from './IconAside';
import iconHome from '../images/home.png';
import iconAbout from '../images/do-utilizador.png'
import iconFront from '../images/ui-design.png'
import iconBack from '../images/backend.png'
import iconCont from '../images/enviar-correio.png'

class Aside extends Component {
  render() {
    const { position } = this.props;
    return (
      <div className={`aside ${position}`}>
        <IconAside className='icon-home' name='home' url={ iconHome } />
        <IconAside className='icon-about' name='sobre-mim' url={ iconAbout } />
        <IconAside className='icon-front' name='projetos-front' url={ iconFront } />
        <IconAside className='icon-back' name='projetos-back' url={ iconBack } />
        <IconAside className='icon-contact' name='contato' url={ iconCont } />
      </div>
    );
  }
}

export default Aside;
