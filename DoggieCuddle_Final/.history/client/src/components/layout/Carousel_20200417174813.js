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
              <div style={{ height: 400 }}>
                <img
                  style={{ overFlow: 'hidden', position:'relative' }}
                  src="../../../../uploads/images/dog1.jpg"
                />
                <div className="carousel-caption"></div>
              </div>
             
              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video
                  className="carousel-center"
                  controls
                  style={{ width: "100%" }}
                  height="250"
                >
                  <source
                    src="../../../../uploads/dog.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption"></div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightpink" }}>
                <div className="carousel-center" style={{fontFamily:"fantasy", fontSize:"30px"}}>“My fashion philosophy is, if you’re not covered in dog hair, your life is empty.” – Elayne Boosler</div>
                <div className="carousel-caption"></div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <div className="carousel-center" style={{fontFamily:"fantasy", fontSize:"30px"}}>“The great pleasure of a dog is that you may make a fool of yourself with him and not only will he not scold you, but he will make a fool of himself too.” – Samuel Butler</div>
                <div className="carousel-caption"></div>
              </div>
             
            </RBCarousel>
          </Col>
         
          
        </Row>
      </div>
    );
  }
}
