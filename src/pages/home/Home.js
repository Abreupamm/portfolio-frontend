import { Component } from 'react';
import { PresentationContainer } from './style';

class Home extends Component {
    render() {
    // const { history } = this.props;
    return (
      <div className="home-page">
        <PresentationContainer>
          <img alt='' src='https://www.informaticienadomicile.com/wp-content/uploads/2022/02/ecoles-codage-informatique.jpeg'/>
          <div>
            <span>Olá,</span>
            <span > meu nome é</span>
            <h1>Pamela Abreu</h1>
            <h3>Desenvolvedora <span>Full Stack</span></h3>
          </div>
        </PresentationContainer>
      </div>
    );
  }
}

export default Home;
