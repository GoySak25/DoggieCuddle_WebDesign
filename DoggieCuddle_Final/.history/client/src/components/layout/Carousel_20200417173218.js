import React from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
// import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

export class Carousels extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(1);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div  style={{ paddingBottom: 20 }}>
        <Row>
         
          <Col style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ overFlow: 'hidden', position:'relative' }}
                  src="import '../../../../uploads/images/dog5.jpg"
                />
                <div className="carousel-caption"></div>
              </div>
              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video
                  className="carousel-center"
                  controls
                  style={{ width: "75%" }}
                  height="250"
                >
                  <source
                    src="https://www.youtube.com/watch?v=3PYLBEQYA00"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption">Video</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightpink" }}>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <iframe
                    style={{ width: 500 }}
                    height="250"
                    src="https://www.youtube.com/watch?v=3PYLBEQYA00"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="carousel-caption">Youtube</div>
              </div>
            </RBCarousel>
          </Col>
         
          
        </Row>
      </div>
    );
  }
}

