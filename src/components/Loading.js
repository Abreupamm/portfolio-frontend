import { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return (
      <div style={{ 
        width: '50%',
        paddingTop: '10%',
        paddingLeft: '40%',
        alignItems: 'center'
       }}>
        <ReactLoading
          type={'spinningBubbles'}
          color={'#a700c2'}
          height={600}
          width={300}
        />
      </div>
    );
  }
}

export default Loading;
