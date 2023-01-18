import { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return (
      <div
        style={ {
          width: '50%',
          paddingTop: '20%',
          paddingLeft: '45%',
          alignItems: 'center',
        } }
      >
        <ReactLoading
          type="spinningBubbles"
          color="#a700c2"
          height={ 300 }
          width={ 150 }
        />
      </div>
    );
  }
}

export default Loading;
