import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './ManageSingleWine.css';

const ManageSingleWine = ({ wineSingle, setWineDelete, setWines, wines }) => {
    // GET TOKEN FROM USE AUTH
    const { token } = useAuth();
    // Wine Delete Handler
    const handleWineDelete = id => {
        const confirmation = window.confirm('Are you sure you want to delete this Wine???');
        if (confirmation) {
            const url = `https://fierce-forest-71065.herokuapp.com/wines/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setWineDelete(true);
                        // Filter wines for rest wines showing
                        const restWines = wines.filter(wine => wine._id !== id);
                        setWines(restWines);
                    }

                });
        }
    }
    return (
        <Col md={4} sm={6} xs={12}>
            <div className="manage-wine-single-section text-start">
                <Row>
                    <Col md={6} sm={6} xs={6}>
                        <div className="manage-singlewine-img">
                            <img src={wineSingle.img} alt="SingleWines" />
                        </div>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                        <button className="wine-delete-btn" onClick={() => handleWineDelete(wineSingle._id)}>Delete</button>
                    </Col>
                </Row>

                <div className="single-wineDetails">
                    <h3>{wineSingle.name}</h3>
                    <h4>Price: <span>${wineSingle.price}</span></h4>

                </div>
            </div>
        </Col>
    );
};

export default ManageSingleWine;