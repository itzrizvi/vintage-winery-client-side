import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './GiveReview.css';

const GiveReview = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    return (
        <>
            <div className="give-review-section py-2">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Write a review</h2>
                </div>
            </div>
        </>
    );
};

export default GiveReview;