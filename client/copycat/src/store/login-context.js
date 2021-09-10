import { createContext, useState } from "react";

const LoginContext = createContext({
    login: '',
    loginPick: (id) => {}    
})

export function LoginContextProvider(props){
    const [loginSelected, setLoginSelected] = useState([]);

    function loginPick(id) {
        setLoginSelected(id)
    }

    const context = {
        login: loginSelected,
        loginPick: loginPick,
    }

    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContext