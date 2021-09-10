import { useState, useContext } from "react"
import { useHistory } from "react-router";
import LoginContext from '../store/login-context'
import classes from "./LoginPage.module.css"
import FormLogin from "../components/user/FormLogin"
import FormRegister from "../components/user/FormRegister";

const LoginPage = () => {
    const history = useHistory();
    const userCtx = useContext(LoginContext)
    const [loginFailed, setLoginFailed] = useState(false)
    const [registerLoad, setRegisterLoad] = useState(false)

    //login
    const login = async (form) => {
        const res = await fetch('https://api-copycat.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const user = await res.json()
        if (user._id) {
            userCtx.loginPick(user._id)
            setLoginFailed(false)
            history.push("/conta");

        }
        else setLoginFailed(true)
    }

    //register
    const register = async (form) => {
        const res = await fetch('https://api-copycat.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const user = await res.json()
        setRegisterLoad(false)
    }

    function setregister() {
        setRegisterLoad(!registerLoad)
    }

    return (
        <div className={classes.page}>
            {registerLoad
                ? <div>
                    <FormRegister onAdd={register} />
                    <div className={classes.registre}>
                        <p >Voltar ao login? <span className={classes.span} onClick={setregister}>Click aqui.</span></p>
                    </div>
                </div>
                : <div>
                    <FormLogin onLogin={login} fail={loginFailed} />
                    <div className={classes.registre}>
                        <p >Não possui uma conta? <span className={classes.span} onClick={setregister}>Registre-se.</span></p>
                    </div>
                </div>}
        </div>
    )
}

export default LoginPage
