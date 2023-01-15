import { Component } from 'react';
// import { zoomInDown } from 'react-animations';
// import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { ProjectCardsContainer, Stacks, ProjectsName } from './style';

class ProjectsCard extends Component {
  handleColor = () => {
    const list = [
      'linear-gradient(to right, #c1f, #70e)',
      'linear-gradient(to bottom, #fa0, #f20)',
      'linear-gradient(to bottom, #fd0, #f90)',
    ];
    const indexRandom = Math.floor(Math.random() * list.length);
    return list[indexRandom];
  };

  render() {
    const {
      data: { name, stacks, skills },
    } = this.props;
    // const styles = StyleSheet.create({
    //   styleAnimation: {
    //     animationName: zoomInDown,
    //     animationDuration: '4s',
    //   },
    // });
    return (
      <ProjectCardsContainer>
        <ProjectsName color={ this.handleColor }>{name}</ProjectsName>
        <p>{skills}</p>
        <div>
          {stacks.map((stack, index) => (
            <Stacks key={ index }>{stack}</Stacks>
          ))}
        </div>
      </ProjectCardsContainer>
    );
  }
}

ProjectsCard.propTypes = {
  data: PropTypes.shape({
    stacks: PropTypes.oneOf([Array]).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectsCard;
