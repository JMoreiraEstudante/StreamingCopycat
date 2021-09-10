import { useState, useContext } from "react"

import classes from "./Form.module.css"
import LoginContext from '../../store/login-context'

const FormAddConta = ({onAdd}) => {
    const [nome, setNome] = useState('')
    const userCtx = useContext(LoginContext)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!nome) {
            alert('Adicione um nome')
            return
        }
        onAdd({ nome, user: userCtx.login})
        setNome('')
    }

    return (
        <div className={classes.login}>
            <div className={classes.form}>
                <h1>Adicione uma conta</h1>
                <form onSubmit={onSubmit}>
                    <div className={classes.formControl}>
                        <label >Nome</label>
                        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className={classes.botao}>
                        <input type="submit" value="Add" />
                    </div>
                </form>
                <div className={classes.info}>
                    <p>*máximo de 3 contas</p>
                </div>
            </div>
        </div>
    )
}

export default FormAddConta
