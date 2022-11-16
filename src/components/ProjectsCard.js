import { Component } from 'react';
import '../CSS/components/projectsCard.css';
import { zoomInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

class ProjectsCard extends Component {
  handleOnClick = () => {
    const { history, data: {id} } = this.props;
    history.push(`projects-details/${id}`)
  }

  createdBackgoundImage = (url) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
  });

  render() {
    const {
      data: { image, name },
    } = this.props;
    let style;
    const styles = StyleSheet.create({
      styleAnimation: {
        animationName: zoomInDown,
        animationDuration: '4s',
      },
    });
    image !== '' && (style = this.createdBackgoundImage(image));
    return (
      <div style={style} className={`container-projects ${css(styles.styleAnimation)}`}>
        <div className="div-button">
          <button onClick={this.handleOnClick} >Detalhes</button>
        </div>
        <span>{name}</span>
      </div>
    );
  }
}

export default ProjectsCard;
