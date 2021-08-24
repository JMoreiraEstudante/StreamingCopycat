import { useState, useEffect } from "react"

import Users from "../components/user/Users"

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
        const res = await fetch('http://localhost:3001/usuarios')
        const data = await res.json()
        return data
    }

    return (
        <div>
            <Users users={users}/>
        </div>
    )
}

export default SelectUserPage
