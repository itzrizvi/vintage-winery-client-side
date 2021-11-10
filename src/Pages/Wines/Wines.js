import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './Wines.css';
import { Container, Row, Spinner } from 'react-bootstrap';
import useWines from '../../hooks/useWines';
import SingleWines from '../SingleWines/SingleWines';
import useAuth from '../../hooks/useAuth';

const Wines = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />

    // USE WINE HOOK
    const { wines } = useWines({});

    // Data Rendering Spinner
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" style={{ display: 'block', margin: '0 auto' }} />
    }

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