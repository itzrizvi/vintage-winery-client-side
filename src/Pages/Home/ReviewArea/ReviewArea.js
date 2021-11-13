import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './ReviewArea.css';
import { Container, Row } from 'react-bootstrap';
import ReviewSingle from '../ReviewSingle/ReviewSingle';

const ReviewArea = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // State for al ratings
    const [ratings, setRatings] = useState([]);
    // Fetch Ratings
    useEffect(() => {
        fetch('https://fierce-forest-71065.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setRatings(data));
    }, [])
    return (
        <>
            <div className="give-review-section pt-2 pb-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Client Reviews</h2>
                </div>
                <Container>
                    <Row>
                        {
                            ratings.map(rating => <ReviewSingle
                                key={rating._id}
                                rating={rating}></ReviewSingle>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ReviewArea;