import { Component } from 'react';
import Typewriter from 'typewriter-effect';
import myImage from '../../images/pamela.jpeg';
import LinksProfile from '../linksProfile/LinksPrifile';
import {
  AboutContainer,
  Presentation,
  Description,
  ParagraphContainer,
  TextHighlight,
} from './style';

class AboutMe extends Component {
  render() {
    const paused1 = 600;
    const paused2 = 500;
    const delay = 80;
    return (
      <AboutContainer>
        <Presentation>
          <Typewriter
            onInit={ (typewriter) => {
              typewriter
                // .typeString('<h2>Olá! </h2>')
                // .typeString('<h2>Meu nome é</h2>')
                // .deleteAll()
                .pauseFor(paused1)
                .changeDelay(delay)
                .typeString('<h1> Pamela Abreu </h1>')
                .start()
                .pauseFor(paused2)
                .typeString(
                  '<h3>Desenvolvedora </h3><span style="color: #2e0;">Full Stack</span>',
                )
                .start();
            } }
          />
          <LinksProfile />
        </Presentation>
        <Description>
          <img alt="Pamela" src={ myImage } />
          <ParagraphContainer id="sobre-mim">
            <p>
              Me apaixonei por
              <TextHighlight color="#a8f"> tecnologia </TextHighlight>
              assim que tive o primeiro contato com programação em 2021, decidi
              estudar desenvolvimento web e foi a melhor escolha que já fiz.
            </p>
            <p>
              Sempre busquei me desenvolver em uma área onde eu pudesse
              proporcionar uma qualidade de vida melhor para minha filha e que,
              além disso, eu conseguisse impactar de forma positiva a vida das
              pessoas. E foi na tecnologia onde finalmente me encontrei.
            </p>
            <p>
              Na
              <TextHighlight color="#2e0"> Trybe</TextHighlight>
              , sou
              <TextHighlight color="#a8f">
                {' Student Summer Job de instrução'}
              </TextHighlight>
              , realizo monitorias técnicas individuais e coletivas onde dou
              suporte e faço revisão de conteúdo de forma síncrona. Está
              ajudando o desenvolvimento de pessoas, tem me proporcionado uma
              satisfação impossível de descrever, vê-los evoluindo, é incrível.
            </p>
            <p>
              Nesse pouco tempo, já aprendi muito e sei que ainda tenho
              <TextHighlight color="#a8f"> MUITO </TextHighlight>
              a aprender. Meu
              objetivo é continuar meu desenvolvimento na prática, fazendo
              parte de uma empresa onde colaboração, diversidade e pessoas façam
              parte de seus valores.
            </p>
          </ParagraphContainer>
        </Description>
      </AboutContainer>
    );
  }
}

export default AboutMe;
