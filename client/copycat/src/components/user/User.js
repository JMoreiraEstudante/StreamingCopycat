import { useContext } from "react"
import UserContext from '../../store/user-context'

const User = (props) => {
    const userCtx = useContext(UserContext)

    function toggleUserSelected() {
        userCtx.userPick(props.id)    
    }

    return (
        <li>
            <h3 onClick={toggleUserSelected}>{props.nome}</h3>
        </li>
    )
}

export default User
