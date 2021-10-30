import React from 'react';
import {Card, Col} from "react-bootstrap";

import {useHistory} from "react-router-dom"


const CarOwnerItem = ({CarOwner}) => {
    const history = useHistory()
    return (
        <Col onClick={() => history.push('/carOwner/' + CarOwner.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <div>id:{CarOwner.id}</div>
                <div>name:{CarOwner.name}</div>
                <div>age:{CarOwner.age}</div>
                <div>email:{CarOwner.email}</div>
            </Card>
        </Col>
    );
};

export default CarOwnerItem;