import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap"

import {Context} from "../../index";
import {createCarOwner,  fetchCarOwner} from "../../http/CarOwnerAPI";
import {observer} from "mobx-react-lite";

const CreateCarOwner = observer(({show, onHide}) => {
    const {CarOwner} = useContext(Context)
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    

    useEffect(() => {
        fetchCarOwner().then(data => CarOwner.setCarOwner(data))      
    }, [])

   

    const addCarOwner = () => {
        const formData = new FormData()
        formData.append('name', `${name}`)
        formData.append('age', `${age}`)
        formData.append('email', `${email}`)
        

       
        createCarOwner(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати Власника
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <p>Ім'я</p>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-1"
                        placeholder="Введіть ім'я власника"
                    />
                    <p>Вік</p>
                    <Form.Control
                        value={age}
                        onChange={e => setAge(Number(e.target.value))}
                        className="mt-1"
                        placeholder="Введіть вік власника"
                        type="number"
                    />
                    <p>Email</p>
                    <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="mt-1"
                        placeholder="Введіть email"
                        
                    />
                   
                    <hr/>
 
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button  onClick={onHide}>Закрити</button>
                <button  onClick={addCarOwner}>Додати</button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCarOwner;