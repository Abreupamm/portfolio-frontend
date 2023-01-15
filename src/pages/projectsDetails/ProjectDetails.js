/* eslint-disable indent */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fadeInDownBig } from 'react-animations';
import IconStacks from '../../components/iconStacks/IconStacks';
import Loading from '../../components/Loading';
import data from '../../utils/projectsList';
// import LanguageProgress from '../../components/LanguageProgress';
import createCalcProgress from '../../utils/createCalcProgress';
import handleColorBackground from '../../utils/handleColorBackground';
import {
  ContainerProjectsDetails,
  Title,
  GifContainer,
  ButtonRedirect,
} from './style';

class ProjectsDetails extends Component {
  state = {
    loading: false,
    values: [],
    processNames: [],
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

    const projectData = data.filter((project) => project.id === JSON.parse(id));
    this.setState({ project: projectData[0] });
    const { keys, values } = await createCalcProgress(
      projectData[0].projectName,
    );
    this.setState({
      processNames: keys,
      values,
      color: handleColorBackground(),
    });
    const time = 1000;
    setTimeout(() => {
      this.setState({ loading: false });
    }, time);
  }

  // handleOnClick = ({ target }) => {
  //   let url;
  //   const { urlGitHub, urlApication } = this.state;
  //   target.name === 'code' ? (url = urlGitHub) : (url = urlApication);
  //   window.location.replace(url);
  // };

  render() {
    // const { history } = this.props;

    const {
      loading,
      color,
      project: {
        name,
        category,
        stacks,
        description,
        urlApication,
        // processNames,
        gif,
      },
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
        animationName: fadeInDownBig,
        animationDuration: '5s',
      },
    });

    return (
      <ContainerProjectsDetails>
        <Title color={ color }>{name}</Title>
        <p>{description}</p>
        <GifContainer color={ color } className={ css(styles.animation) }>
          {category === 'front' && (
            <img src={ gif } alt={ `gif da aplicação ${name}` } />
          )}
          {category === 'back' && (
            <>
              <h3>Stacks utilizadas:</h3>
              <IconStacks stacks={ stacks } />
            </>
          )}
          <ButtonRedirect color={ color } name="code">
            Código
          </ButtonRedirect>
          {urlApication !== '' && (
            <ButtonRedirect color={ color } name="application">
              Aplicação
            </ButtonRedirect>
          )}
        </GifContainer>
        <div className="container-left">
          {/* <div className="div-buttons"> */}
          {/* </div> */}
          {/* <div className="div-progress">
            {processNames.map((key, index) => (
              // eslint-disable-next-line react/jsx-key
              <LanguageProgress tec={ key } value={ values[index] } />
            ))}
          </div> */}
        </div>
      </ContainerProjectsDetails>
    );
  }
}

export default ProjectsDetails;
