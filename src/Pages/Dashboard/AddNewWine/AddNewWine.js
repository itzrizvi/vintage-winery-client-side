import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddNewWine.css';

const AddNewWine = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    //USING HOOK FORM
    const { register, handleSubmit, reset } = useForm();
    // State for success message
    const [addWine, setAddWine] = useState(false);
    // Add Wine Function
    const handleAddWine = (data) => {
        fetch('https://fierce-forest-71065.herokuapp.com/wines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddWine(true);
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-new-wine-section py-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Add a New Wine</h2>
                </div>
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="add-new-wine-form-inner">
                                {addWine && <Alert variant='success'>You Have Added a New Wine Successfully!!!</Alert>}
                                <form onSubmit={handleSubmit(handleAddWine)}>
                                    <input {...register("name")} placeholder='Wine name...' required />
                                    <input {...register("price")} placeholder='Wine Price...' required />
                                    <input {...register("img")} placeholder='Wine valid image url (59*230)...' required />
                                    <textarea {...register("desc")} placeholder='Wine description...' />
                                    <input type="submit" value="Add Wine" className='add-wine-btn' />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AddNewWine;