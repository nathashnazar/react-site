import 'bootstrap/dist/css/bootstrap.min.css'
import './carousal.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/esm/Container';
import React, { Component } from "react";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  background: "blue"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

export default class CustomCarousel extends Component {

    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
   
  return (
  <div className='carousal-div'>
    <Container >
    {/* <h2> Responsive </h2> */}
    <Slider {...settings}>
      <div>
        <div className="card-carousal">
          <div className='carousal-text'>
            <p className="">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
          </div>
          
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div class="client-div">
                  <img className="client-icons"  src="images/insta.png" alt='cat'/><img className="client-icons"  src="images/watsapp.png" alt='pic'/><img id="client-twit" src="images/Twit.png" alt='cat'/>
                </div>
            </div>
        </div>
      </div>

      <div>
      <div className="card-carousal">
          <p className="carousal-text">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div className="client-div">
                </div>
            </div>
        </div>
      </div>
      <div>
      <div className="card-carousal">
          <p className="carousal-text">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div className="client-div">
                </div>
            </div>
        </div>
      </div>
      <div>
      <div className="card-carousal">
          <p className="carousal-text">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div className="client-div">
                </div>
            </div>
        </div>
      </div>
      <div>
      <div className="card-carousal">
          <p className="carousal-text">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div className="client-div">
                </div>
            </div>
        </div>
      </div>
      <div>
      <div className="card-carousal">
          <p className="carousal-text">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div className="client-div">
                </div>
            </div>
        </div>
      </div>
      <div>
      <div className="card-carousal">
          <p className="carousal-text">I love how MedB shows me all the doctors and clinics near me, so I can choose the best one for my needs. The app's online booking feature is a lifesaver, and I appreciate the transparency it provides.</p>
            <div className="wave">
                <svg viewBox="0 0 500 200">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0 " fill="white"></path>
                </svg>
                <img className="reviewer" src="images/client.jpg" alt='client'/>
                <h6 className="clients">Mary Jacob</h6>
                <div className="client-div">
                </div>
            </div>
        </div>
      </div>
    
    </Slider>
    
  </Container>
</div>

    );
  }
}
 
// export default CustomCarousel;
