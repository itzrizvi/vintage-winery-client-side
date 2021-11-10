import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './Wines.css';
import { Container, Row } from 'react-bootstrap';
import useWines from '../../hooks/useWines';
import SingleWines from '../SingleWines/SingleWines';

const Wines = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />

    // USE WINE HOOK
    const { wines } = useWines({})

    return (
        <>
            <div className="wines-section mt-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Our All Wines</h2>
                </div>
                <Container>
                    <Row>
                        {
                            wines.map(wineSingle => <SingleWines
                                key={wineSingle._id}
                                wineSingle={wineSingle}></SingleWines>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Wines;