import { Component } from 'react';
import '../CSS/home.css';
import Aside from '../components/Aside';

class Home extends Component {
  handleOnClick = () => {
    const { history } = this.props;
    history.push('/about-me');
  }
  render() {
    return (
      <div className='home-page'>
        <div className='container-name'>
          <h1 className='name'>Pamela Abreu</h1>
          <h3 className='sub-title'>Full Stack Developer</h3>
          <button onClick={ this.handleOnClick } className='button-about'>SOBRE MIM</button>
        </div>
        <div className='container-img'>
          <Aside position='rigth'/>
        </div>
      </div>
    );
  }
}

export default Home;