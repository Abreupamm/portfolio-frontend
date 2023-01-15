import { Component } from 'react';
import PropTypes from 'prop-types';
import { ProjectCardsContainer, Stacks, ProjectsName } from './style';
import handleColorBackground from '../../utils/handleColorBackground';

class ProjectsCard extends Component {
  handleClick = () => {
    const { history, data: { id } } = this.props;
    history.push(`/projects-details/${id}`);
  };

  render() {
    const {
      data: { name, stacks, skills },
    } = this.props;
    return (
      <ProjectCardsContainer onClick={ this.handleClick }>
        <ProjectsName color={ handleColorBackground }>{name}</ProjectsName>
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
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProjectsCard;
