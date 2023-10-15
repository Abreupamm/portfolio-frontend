import { Component } from 'react';
import emailjs from '@emailjs/browser';
import {
  ContactContainerStyle,
  TextAreaStyle,
  ButtonStyle,
  InputStyle,
  ResponseStyle,
} from './style';

class Contact extends Component {
  state = {
    nome: '',
    email: '',
    message: '',
    submit: false,
    response: '',
    color: '',
  };

  handleOnChenge = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { nome, email, message } = this.state;
    this.setState({
      submit: true,
      response: 'Enviando ...',
      color: 'white',
    });

    if (nome === '' || email === '' || message === '') {
      this.setState({
        response: 'Por favor, preencha todos os campos!',
        color: '#d41900' });
      return;
    }

    const templateParams = {
      from_name: nome,
      email,
      message,
    };

    emailjs.send(
      'service_werfjhu',
      'template_q832lmh',
      templateParams,
      'gdGaFpCHxeNWn8Q8P',
    ).then(() => {
      this.setState({
        nome: '',
        email: '',
        message: '',
        response: 'Mensagem enviada. Obrigada!',
        color: '#2e0',
      });
    })
      .catch(() => {
        this.setState({
          response: 'Algo deu errado, tente novamente por favor!',
          color: '#d41900' });
      });
  };

  render() {
    const { nome, email, message, submit, response, color } = this.state;
    return (
      <ContactContainerStyle>
        <h1 id="contato">Contato</h1>
        {
          submit && <ResponseStyle color={ color }>{response}</ResponseStyle>
        }
        <form onSubmit={ this.handleOnSubmit }>
          <InputStyle
            type="text"
            placeholder="Digite seu nome"
            onChange={ this.handleOnChenge }
            value={ nome }
            name="nome"
          />
          <InputStyle
            type="text"
            placeholder="Digite seu email"
            onChange={ this.handleOnChenge }
            value={ email }
            name="email"
          />
          <TextAreaStyle
            placeholder="Digite sua mensagem..."
            onChange={ this.handleOnChenge }
            value={ message }
            name="message"
          />
          <ButtonStyle type="submit" value="Enviar" />
        </form>
      </ContactContainerStyle>
    );
  }
}

export default Contact;
