import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'
import './styleNavBar.css'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar >
            <Container >
                <div className="navBar">
                <NavLink to={"/glery"}>Галерея</NavLink>
                <NavLink to={"/carOwner"}>Власники машин</NavLink>
                <NavLink  to={"/car"}>Машини</NavLink>
                {user.isAuth ?
                    <Nav  >
                        
                        <Button
                            onClick={() => logOut()}
                        >
                            Вийти
                        </Button>
                    </Nav>
                    :
                    <Nav  >
                        <Button  onClick={() => history.push("/login")}>Авторизація</Button>
                    </Nav>
                    }
                </div>
                
            </Container>
        </Navbar>

    );
});

export default NavBar;