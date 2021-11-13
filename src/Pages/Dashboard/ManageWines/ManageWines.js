import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './ManageWines.css';
import { Alert, Container, Row } from 'react-bootstrap';
import useWines from '../../../hooks/useWines';
import ManageSingleWine from '../ManageSingleWine/ManageSingleWine';


const ManageWines = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // State For Delete Confirm Message
    const [wineDelete, setWineDelete] = useState(false);
    // Using Use Wines Hook
    const { wines, setWines } = useWines();
    return (
        <>
            <div className="manage-wines-section py-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Manage Wines</h2>
                </div>
                <Container>
                    {wineDelete && <Alert variant='success'>You Have Deleted a Wine Successfully!!!</Alert>}
                    <Row>
                        {
                            wines.map(wineSingle => <ManageSingleWine
                                key={wineSingle._id}
                                wines={wines}
                                setWines={setWines}
                                setWineDelete={setWineDelete}
                                wineSingle={wineSingle}></ManageSingleWine>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ManageWines;