import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {




    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/hWZHrXZ/slide01.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>WELCOME TO VINTAGE WINERY</h3>
                    <p>Since 1784 we are providing one of the best wines all over the world. <br />
                        Achieved a lot of best winery awards from different region.s</p>
                    <Link to="/allwines" className="explore-btn">Explore Our Wines</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jDpfCW1/slide02.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>BEST OF WINERY</h3>
                    <p>We provide pure favlours of graps, apples, pineapples etc for the better test.  <br />
                        Our top most clients are so much happy with us and they also recommended our wines.</p>
                    <Link to="/allwines" className="explore-btn">Explore Our Wines</Link>                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/MGZH261/slide03.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>WE SHIP ANYWHERE</h3>
                    <p>We ship wines all over the worlds where the wines permission are granted, many of shipment <br />
                        we did to different countries like New York, UK, California, Paris, Italy etc.</p>
                    <Link to="/allwines" className="explore-btn">Explore Our Wines</Link>                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;