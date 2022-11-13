import { Component } from 'react';
import '../CSS/aside.css';
import IconAside from './IconAside';
import iconHome from '../images/home.png';
import iconAbout from '../images/do-utilizador.png';
import iconFront from '../images/ui-design.png';
import iconBack from '../images/backend.png';
import iconCont from '../images/enviar-correio.png';

class Aside extends Component {
  render() {
    const { position, history } = this.props;
    return (
      <div className={`aside ${position}`}>
        <IconAside
          className="icon-home"
          name="home"
          url={iconHome}
          history={history}
        />
        <IconAside
          className="icon-about"
          name="about-me"
          url={iconAbout}
          history={history}
        />
        <IconAside
          className="icon-front"
          name="projects-frontend"
          url={iconFront}
          history={history}
        />
        <IconAside
          className="icon-back"
          name="projects-backend"
          url={iconBack}
          history={history}
        />
        <IconAside
          className="icon-contact"
          name="contact"
          url={iconCont}
          history={history}
        />
      </div>
    );
  }
}

export default Aside;
