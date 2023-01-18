/* eslint-disable react/prop-types */
import { Component } from 'react';
import '../CSS/components/aside.css';
import IconAside from './IconAside';
import iconHome from '../images/home.png';
import iconAbout from '../images/do-utilizador.png';
import iconFront from '../images/ui-design.png';
import iconBack from '../images/backend.png';
import iconCont from '../images/enviar-correio.png';

class Aside extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="aside">
        <IconAside
          className="icon-home"
          page="home"
          name="Início"
          urlIcon={ iconHome }
          history={ history }
        />
        <IconAside
          className="icon-about"
          page="about-me"
          name="Sobre Mim"
          urlIcon={ iconAbout }
          history={ history }
        />
        <IconAside
          className="icon-back"
          page="projects-backend"
          name="Projetos BackEnd"
          urlIcon={ iconBack }
          history={ history }
        />
        <IconAside
          className="icon-front"
          page="projects-frontend"
          name="Projetos FrontEnd"
          urlIcon={ iconFront }
          history={ history }
        />

        <IconAside
          className="icon-contact"
          page="contact"
          name="Contato"
          urlIcon={ iconCont }
          history={ history }
        />
      </div>
    );
  }
}

export default Aside;
