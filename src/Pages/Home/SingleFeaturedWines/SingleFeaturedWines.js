import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import './SingleFeaturedWines.css';

const SingleFeaturedWines = ({ featWine }) => {
    //Font Awesome Icons
    const flagIcon = <FontAwesomeIcon icon={faFlag} />

    // Destructuring Data
    const { name, img, _id, price } = featWine;
    return (
        <Col md={4} sm={6} xs={12} className='mb-5'>
            <div className="featwine-inner">
                <div className="feat-img">
                    <img src={img} alt="FEATUREDWINE" />
                </div>
                <div className="feat-details">
                    <h3>{name}</h3>
                    <p>Price: <span style={{ color: '#c02323' }}>${price}</span></p>
                    <Link to=''>
                        <button>{flagIcon} Place Order</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default SingleFeaturedWines;