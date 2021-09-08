import { useState, useEffect } from "react"

import Users from "../components/user/Users"
import classes from "./SelectUserPage.module.css"

const SelectUserPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const usersFromServer = await fetchUsers()
            setUsers(usersFromServer)
        }

        getUsers()
    }, [])

    //get todos
    const fetchUsers = async () => {
        const res = await fetch('http://localhost:3001/conta/user/6139453dc97a6a249810c4f9')
        const data = await res.json()
        return data
    }

    return (
        <div className={classes.page}>   
            <h1 className={classes.msg}>Quem está assistindo?</h1>
            <Users users={users}/>
        </div>
    )
}

export default SelectUserPage
