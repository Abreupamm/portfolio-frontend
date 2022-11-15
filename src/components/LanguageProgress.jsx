import { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../CSS/components/languageProgress.css';

class LanguageProgress extends Component {
  state = {
    valueStart: 0,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ valueStart: 66 });
    }, '1100');
  };
  render() {
    const { valueStart } = this.state;

    const styleProgressBar = {
      path: {
        stroke: `rgba(62, 152, 199, ${valueStart / 100})`,
        transition: 'stroke-dashoffset 0.9s ease 0s',
      },
      trail: {
        stroke: '#d6d6d6',
      },
      background: {
        fill: '#3e98c7',
      },
    };

    return (
      <div className='container-progress'>
        <CircularProgressbarWithChildren
          styles={styleProgressBar}
          value={valueStart}
        >
          <strong>{`${valueStart}%`}</strong>
          <span>test</span>
        </CircularProgressbarWithChildren>
      </div>
    );
  }
}

export default LanguageProgress;
