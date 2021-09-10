import { useState } from "react"

import classes from "./Form.module.css"

const FormRegister = ({onAdd}) => {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!nome || !senha) {
            alert('Adicione nome e senha')
            return
        }
        onAdd({ nome, senha })
        setNome('')
        setSenha('')
    }

    return (
        <div className={classes.login}>
            <div className={classes.form}>
                <h1>Registre-se</h1>
                <form onSubmit={onSubmit}>
                    <div className={classes.formControl}>
                        <label >Nome</label>
                        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className={classes.formControl}>
                        <label >Senha</label>
                        <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className={classes.botao}>
                        <input type="submit" value="Registrar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormRegister
