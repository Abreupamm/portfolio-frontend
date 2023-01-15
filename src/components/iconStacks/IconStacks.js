import { Component } from 'react';
import PropTypes from 'prop-types';
import { getStacksImage } from '../../utils/getStacks';
import { StyleContainer } from './style';

class IconStacks extends Component {
  state = {
    images: getStacksImage,
    stacks: [],
  };

  componentDidMount() {
    const { stacks } = this.props;
    this.setState({ stacks });
  }

  render() {
    const { images, stacks } = this.state;

    return (
      <StyleContainer>
        {stacks.map((stackName, i) => (
          <div key={ i }>
            <img
              alt={ `icon stack ${stackName}` }
              src={ images[stackName] }
            />
            <span>{stackName}</span>
          </div>
        ))}
      </StyleContainer>
    );
  }
}

IconStacks.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IconStacks;
