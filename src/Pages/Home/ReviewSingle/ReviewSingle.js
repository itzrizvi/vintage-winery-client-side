import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './ReviewSingle.css';

const ReviewSingle = ({ rating }) => {

    return (
        <Col md={4} sm={6} xs={12}>
            <div className="single-rating-inner">
                <p>{rating.writtenRating}</p>
                <Rating
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={rating.rating}></Rating>
                <h3>{rating.name}</h3>
            </div>
        </Col>
    );
};

export default ReviewSingle;