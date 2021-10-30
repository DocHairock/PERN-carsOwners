import { observer } from "mobx-react-lite";
import React, {useContext, useState} from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./styleAuth.css";
import { Context } from "../index";
import {login, registration} from "../http/userAPI";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push("/carOwner")
        } catch (e) {
//            alert(e.response.data.message)
        }

    }
    

    return (
        <div className="auth">
            <div className="box">
                <h2>{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <div className="form">
                    <input
                        placeholder="введіть логін"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="введіть пароль"
                         value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="button">
                        {isLogin ?
                            <div>
                             <NavLink to={'/registration'}> Реєстрація </NavLink> 
                        </div>
                            :
                        <div>
                            <NavLink to={'/login'}> Вхід </NavLink> 
                        </div>
                        }
                        
                        <button
                            onClick={click}
                            className="block" type="button">
                            {isLogin?'Ввійти':'Реєстрація'}
                        
                        </button>
                    </div>
                    
                </div>
                
           
            </div>
        </div>
        
    )
}
)

export default Auth