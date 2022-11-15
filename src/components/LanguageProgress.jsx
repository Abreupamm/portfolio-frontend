import { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../CSS/components/languageProgress.css';

class LanguageProgress extends Component {
  state = {
    valueStart: 0,
  };
  componentDidMount = () => {
    const { value } = this.props;
    setTimeout(() => {
      this.setState({ valueStart: value });
    }, '1100');
  };
  render() {
    const { valueStart } = this.state;
    const { tec } = this.props;
    const styleProgressBar = {
      path: {
        stroke: `rgba(167, 0, 194, 100%)`,
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
      <div className="container-progress">
        <CircularProgressbarWithChildren
          styles={styleProgressBar}
          value={valueStart}
        >
          <strong>{`${valueStart}%`}</strong>
          <span>{tec}</span>
        </CircularProgressbarWithChildren>
      </div>
    );
  }
}

export default LanguageProgress;
