import { Component } from 'react';
import emailjs from '@emailjs/browser';
import {
  ContactContainerStyle,
  TextAreaStyle,
  ButtonStyle,
  InputStyle,
} from './style';

class Contact extends Component {
  state = {
    nome: '',
    email: '',
    message: '',
    submit: false,
  };

  handleOnChenge = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { nome, email, message } = this.state;

    if (nome === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos!');
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
        submit: true,
        nome: '',
        email: '',
        message: '',
      });
    })
      .catch(() => { alert('Algo deu errado, tente novamente por favor!'); });
  };

  render() {
    const { nome, email, message, submit } = this.state;
    return (
      <ContactContainerStyle>
        <h1>Contato</h1>
        {
          submit && <span>Mensagem enviada. Obrigada!</span>
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
