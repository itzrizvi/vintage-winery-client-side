import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './FeaturedWines.css';
import SingleFeaturedWines from '../SingleFeaturedWines/SingleFeaturedWines';
import useWines from '../../../hooks/useWines';

const FeaturedWines = () => {
    // Font Awesome Icon
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />

    // USE WINE HOOK
    const { wines } = useWines({});

    return (
        <>
            <div className="featuredWines-section mb-5">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Featured Wines</h2>
                </div>
                <Container>
                    <Row>
                        {
                            wines.slice(0, 6).map(featWine => <SingleFeaturedWines
                                key={featWine._id}
                                featWine={featWine}></SingleFeaturedWines>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default FeaturedWines;