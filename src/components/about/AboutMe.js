import { Component } from 'react';

import myImage from '../../images/pamela.jpeg';
import {
  AboutContainer,
  Presentation,
  Description,
  ParagraphContainer,
  TextHighlight,
} from './style';

class AboutMe extends Component {
  render() {
    // const { history } = this.props;
    return (
      <AboutContainer>
        <Presentation>
          <span>Olá,</span>
          <span>meu nome é</span>
          <h1>Pamela Abreu</h1>
          <h3>
            Desenvolvedora
            <TextHighlight color="#2e0"> Full Stack</TextHighlight>
          </h3>
        </Presentation>
        <Description>
          <img alt="Pamela" src={ myImage } />
          <ParagraphContainer>
            <p>
              Me apaixonei por
              <TextHighlight color="#a8f"> tecnologia </TextHighlight>
              assim que tive o primeiro contato com
              programação em 2021, decidi estudar desenvolvimento web e foi a
              melhor escolha que já fiz.
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
              suporte e revisão de conteúdo de forma síncrona. Está ajudando o
              desenvolvimento de pessoas, tem me proporcionado uma satisfação
              impossível de descrever, vê-los evoluindo, é incrível.
            </p>
            <p>
              Nesse pouco tempo, já aprendi muito e sei que ainda tenho
              <TextHighlight color="#a8f"> MUITO </TextHighlight>
              a aprender. Meu
              objetivo é continuar buscando me desenvolver na prática, fazendo
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
