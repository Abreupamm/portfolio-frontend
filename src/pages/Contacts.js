import { Component } from 'react';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Title from '../components/Title';


class Contact extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Title title="CONTATO" />
        <Aside history={history} position="left" />
        <Footer />
      </div>
    );
  }
}

export default Contact;