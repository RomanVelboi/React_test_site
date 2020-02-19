import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import road_photo from '../assets/road-while-raining.jpg';
import tree_photo from '../assets/tree-with-spiral-lights.jpg';
import couple_photo from '../assets/photo-of-couple.jpg';   

export class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={road_photo}
                        alt="Road"
                    />
                    <Carousel.Caption>
                        <h3>Road photo</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={tree_photo}
                        alt="Tree photo"
                    />
                    <Carousel.Caption>
                        <h3>Road photo</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={couple_photo}
                        alt="Photo"
                    />
                    <Carousel.Caption>
                        <h3>Photo photo</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}