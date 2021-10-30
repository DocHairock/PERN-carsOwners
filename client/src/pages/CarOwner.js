import React, { useState } from 'react';
import "./styleCarOwner.css";
import CreateCarOwner from '../components/modals/CreateCarOwner';
import CarOwnerList from '../components/CarOwnerList';
import Pages from '../components/Pages';


const CarOwner = () => {
    const [CarOwnerVisible, setCarOwnerVisible] = useState(false)

    return (
        <div className="box">
            <div className="table">
                <h2>CarOwners</h2>
                
            <div> <CarOwnerList/></div>
            </div>

            <div className="addNew">
              <button
                onClick={() => setCarOwnerVisible(true)}
            >
                Додати власника
                </button>
             <CreateCarOwner show={CarOwnerVisible} onHide={() => setCarOwnerVisible(false)} />   
            </div>
           
        </div>
    )
}

export default CarOwner
