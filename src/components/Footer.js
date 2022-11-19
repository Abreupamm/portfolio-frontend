import { Component } from 'react';
import '../CSS/components/footer.css';

class Footer extends Component {
  render() {
    const { position } = this.props;
    return (
      <footer className={`footer ${position}`}>
        <p>Copyright © Pamela Abreu 2022</p>
      </footer>
    );
  }
}

export default Footer;
