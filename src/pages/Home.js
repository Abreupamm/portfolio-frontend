import { Component } from 'react';
import '../CSS/home.css';
import Aside from '../components/Aside';

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='container-name'>
          <h1 className='name'>Pamela Abreu</h1>
          <h3 className='sub-title'>Full Stack Developer</h3>
          <button className='button-about'>SOBRE MIM</button>
        </div>
        <div className='container-img'>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default Home;