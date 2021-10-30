import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { fetchCar } from "../http/CarAPI";
import "./styleCar.css"

const Car = () => {
    const [car, setCar] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchCar(id).then(data => setCar(data))
    }, [])

    return (
        <div className="box">
            <div className="table">
                <h2>Car</h2>
                
            <div>Brand:{car.brand}</div>
            <div>Owner:{car.owner}</div>
            <div>Number:{car.number}</div>
            <div>Year:{car.year}</div>
              
            
            </div>
            
           

        </div>
    )
}


export default Car