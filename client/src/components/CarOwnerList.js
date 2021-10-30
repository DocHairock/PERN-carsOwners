import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CarOwnerItem from "./CarOwnerItem";

const CarOwnerList = observer(() => {
    const {CarOwner} = useContext(Context)

    return (
        <Row >
            car list
            {CarOwner.CarOwner.map(CarOwner =>
                <CarOwnerItem key={CarOwner.id} CarOwner={CarOwner}/>
            )}
        </Row>
    );
});

export default CarOwnerList;