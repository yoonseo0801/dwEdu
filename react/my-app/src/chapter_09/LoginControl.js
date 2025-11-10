import React, {useState} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginControl(props){
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsloggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsloggedIn(false);
    }

    // let button;
    // if(isLoggedIn) {
    //     button = <LoginButton onClick={handleLogoutClick}/>
    // }else { 
    //     button = <LogoutButton onClick={handleLoginClick}/>
    // }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn 
                ? <LogoutButton onClick={handleLogoutClick}/>
                : <LoginButton onClick={handleLoginClick}/>
            }
        </div>
    );

};

    
export default LoginControl;