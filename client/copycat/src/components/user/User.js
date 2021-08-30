import { useContext } from "react"

import { RiAccountPinCircleFill } from "react-icons/ri";
import UserContext from '../../store/user-context'
import classes from "./User.module.css"

const User = (props) => {
    const userCtx = useContext(UserContext)

    function toggleUserSelected() {
        userCtx.userPick(props.id)
    }

    return (
        <li className={classes.user} onClick={toggleUserSelected}>
            <RiAccountPinCircleFill />
            <h2 className={classes.nome}>{props.nome}</h2>
        </li>
    )
}

export default User
