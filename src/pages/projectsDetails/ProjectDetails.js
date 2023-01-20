/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { headShake } from 'react-animations';
import IconStacks from '../../components/iconStacks/IconStacks';
import Loading from '../../components/Loading';
import Footer from '../../components/footer/Footer';
import data from '../../utils/projectsList';
import LanguageProgress from '../../components/progress/LanguageProgress';
import createCalcProgress from '../../utils/createCalcProgress';
import handleColorBackground from '../../utils/handleColorBackground';
import {
  ContainerProjectsDetails,
  Title,
  GifContainer,
  ButtonRedirect,
  StyleProgress,
} from './style';

class ProjectsDetails extends Component {
  state = {
    loading: false,
    values: [],
    progressNames: [],
    project: [],
    color: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const projectData = data.find((project) => project.id === JSON.parse(id));
    this.setState({ project: projectData });
    const { keys, values } = await createCalcProgress(
      projectData.projectName,
    );
    this.setState({
      progressNames: keys,
      values,
      color: handleColorBackground(),
    });
    const time = 1000;
    setTimeout(() => {
      this.setState({ loading: false });
    }, time);
  }

  handleOnClick = ({ target }) => {
    const {
      project: { urlGitHub, urlApication },
    } = this.state;
    let url = urlApication;
    if (target.name === 'code') url = urlGitHub;
    window.location.replace(url);
  };

  render() {
    const {
      loading,
      color,
      progressNames,
      values,
      project: { name, category, stacks, description, urlApication, gif },
    } = this.state;

    if (loading) {
      return (
        <ContainerProjectsDetails>
          <Loading />
        </ContainerProjectsDetails>
      );
    }

    const styles = StyleSheet.create({
      animation: {
        animationName: headShake,
        animationDuration: '10s',
      },
    });

    return (
      <>
        <ContainerProjectsDetails>
          <Title color={ color }>{name}</Title>
          <>
            <ButtonRedirect
              onClick={ this.handleOnClick }
              color={ color }
              name="code"
            >
              Código
            </ButtonRedirect>

            {urlApication !== '' && (
              <ButtonRedirect
                onClick={ this.handleOnClick }
                color={ color }
                name="application"
              >
                Aplicação
              </ButtonRedirect>
            )}
          </>
          <p>{description}</p>
          <GifContainer color={ color } className={ css(styles.animation) }>
            {category === 'front' && (
              <img src={ `${gif}` } alt={ `gif da aplicação ${name}` } />
            )}
            {category === 'back' && (
              <>
                <h3>Stacks utilizadas:</h3>
                <IconStacks stacks={ stacks } />
              </>
            )}
          </GifContainer>
          <StyleProgress>
            {progressNames.map((progress, index) => (
              <LanguageProgress
                key={ index }
                tec={ progress }
                value={ values[index] }
              />
            ))}
          </StyleProgress>
        </ContainerProjectsDetails>
        <Footer />
      </>
    );
  }
}

ProjectsDetails.propsTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProjectsDetails;
