import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import Links from '../components/Links';
import Footer from '../components/Footer';
import '../CSS/pages/about.css';
import myImage from '../images/pamela.jpeg';

class AboutMe extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="about-page">
        <Title title="SOBRE MIM" />
        <Aside history={history} />
        <img className='myImage' alt='Pamela' src={myImage}/>
        <p className='sobre'>
          Me apaixonei por tecnologia assim que tive o primeiro contato com
          programação em 2021, decidi estudar desenvolvimento web e foi a melhor
          escolha que já fiz.Nesse pouco tempo, no universo da tecnologia, já
          aprendi muito e sei que ainda tenho MUITO a aprender. Já consigo
          contribuir no desenvolvimento de pessoas estudantes e é uma das coisas
          na qual tenho muito prazer em fazer.Agora, me vejo aprimorando cada
          vez mais meus conhecimentos técnicos e pronta para conseguir impactar
          cada vez mais vidas e rotinas utilizando a programação!
        </p>
        <Links/>
        <Footer position="bottom" />
      </div>
    );
  }
}

export default AboutMe;
