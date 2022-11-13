import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import '../CSS/about.css';
import iconGitHub from '../images/github.png';
import iconLinkedin from '../images/linkedin.png';

class AboutMe extends Component {
  handleOnClick = ({ target: { alt } }) => {
    alt === 'icon github'
      ? (window.location.replace('https://github.com/Abreupamm'))
      : (window.location.replace('https://www.linkedin.com/in/pamela-silva-de-abreu/'));
  };

  render() {
    const { history } = this.props;
    return (
      <div className="about-page">
        <Title title="SOBRE MIM" />
        <Aside history={history} position="left" />
        <p>
          Me apaixonei por tecnologia assim que tive o primeiro contato com
          programação em 2021, decidi estudar desenvolvimento web e foi a melhor
          escolha que já fiz.Nesse pouco tempo, no universo da tecnologia, já
          aprendi muito e sei que ainda tenho MUITO a aprender. Já consigo
          contribuir no desenvolvimento de pessoas estudantes e é uma das coisas
          na qual tenho muito prazer em fazer.Agora, me vejo aprimorando cada
          vez mais meus conhecimentos técnicos e pronta para conseguir impactar
          cada vez mais vidas e rotinas utilizando a programação!
        </p>
        <input type="image" alt="icon github" src={iconGitHub} onClick={this.handleOnClick}/>
        <input type="image" alt="icon linkedin" src={iconLinkedin} onClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default AboutMe;
