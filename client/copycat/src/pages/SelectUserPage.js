import { useState, useEffect, useContext } from "react"

import Users from "../components/user/Users"
import FormAddConta from "../components/user/FormAddConta"
import LoginContext from '../store/login-context'
import classes from "./SelectUserPage.module.css"

const SelectUserPage = () => {
    const userCtx = useContext(LoginContext)
    const [contas, setContas] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const usersFromServer = await fetchUsers()
            setContas(usersFromServer)
        }
        getUsers()
    }, [])

    //get todos
    const fetchUsers = async () => {
        const res = await fetch(`https://api-copycat.herokuapp.com/conta/user/${userCtx.login}`)
        const data = await res.json()
        return data
    }

    //add conta
    const add = async (form) => {
        const res = await fetch('https://api-copycat.herokuapp.com/contas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const user = await res.json()
        setContas([...contas, user])
    }

    return (
        <div className={classes.page}>
            <div>
                {contas.length != 0 && <h1 className={classes.msg}>Quem está assistindo?</h1>}
                <Users users={contas} />
            </div>
            {contas.length < 3 && 
                <div>
                    <FormAddConta onAdd={add}/>
                </div>
            }
        </div>
    )
}

export default SelectUserPage
