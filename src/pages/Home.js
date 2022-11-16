import { Component } from 'react';
import '../CSS/pages/home.css';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import { bounceInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

class Home extends Component {
  handleOnClick = () => {
    const { history } = this.props;
    history.push('/about-me');
  };
  render() {
    const { history } = this.props;
    const styles = StyleSheet.create({
      bounceInDown: {
        animationName: bounceInDown,
        animationDuration: '4s',
      },
    });
    return (
      <div className="home-page">
        <Aside history={history} />
        <img
          alt=""
          src="https://cdn.euroinnova.edu.es/img/subidasEditor/alba%20(1)-1624881248.webp"
        />
        <div className={`container-name ${css(styles.bounceInDown)}`}>
          <span className={'sub-title hi1'}>Olá,</span>
          <span className="sub-title hi2"> meu name é</span>
          <h1 className="name">Pamela Abreu</h1>
          <h3 className="sub-title">Desenvolvedora Full Stack</h3>
          <button onClick={this.handleOnClick} className="button-about">
            SOBRE MIM
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
