import { Component } from 'react';
import { BackgroundContainer } from './style';
import AboutMe from '../../components/about/AboutMe';

class Home extends Component {
  render() {
    // const { history } = this.props;
    return (
      <div className="home-page">
        <BackgroundContainer>
          <img
            alt=""
            src="https://www.informaticienadomicile.com/wp-content/uploads/2022/02/ecoles-codage-informatique.jpeg"
          />
        </BackgroundContainer>
        <AboutMe />
      </div>
    );
  }
}

export default Home;
