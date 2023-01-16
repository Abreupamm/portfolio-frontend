/* eslint-disable react/prop-types */
import { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { StyleContainer } from './style';

class LanguageProgress extends Component {
  state = {
    valueStart: 0,
  };

  componentDidMount() {
    const { value } = this.props;
    setTimeout(() => {
      this.setState({ valueStart: value });
    }, '1100');
  }

  render() {
    const { valueStart } = this.state;
    const { tec } = this.props;
    const styleProgressBar = {
      path: {
        stroke: '#a8f',
        transition: 'stroke-dashoffset 0.9s ease 0s',
      },
      trail: {
        stroke: 'rgb(245, 122, 233, 15%)',
      },
      background: {
        fill: '#3e98c7',
      },
    };

    return (
      <StyleContainer>
        <CircularProgressbarWithChildren
          styles={ styleProgressBar }
          value={ valueStart }
        >
          <strong>{`${valueStart}%`}</strong>
          <span>{tec}</span>
        </CircularProgressbarWithChildren>
      </StyleContainer>
    );
  }
}

export default LanguageProgress;
