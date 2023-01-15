/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-spacing */
import { Component } from 'react';
import { getStacksImage } from '../utils/getStacks';

class IconStacks extends Component {
  state = getStacksImage;
  // eslint-disable-next-line lines-between-class-members
  render() {
    const { stacks } = this.props;
    const styleImage = { width: '70px' };
    const styleContainer = {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      maxWidth: '300px',
      border: 'solid #ded5df 5px',
      margin: '50px auto',
    };

    return (
      <div>
        <h3 style={ {} }>Stacks utilizadas:</h3>
        <div style={styleContainer}>
          {stacks.map((stack) => (
            <img
              style={styleImage}
              key={stack}
              alt={`icon stack ${stack}`}
              src={this.state[stack]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default IconStacks;
