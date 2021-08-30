import { Link } from 'react-router-dom'

import classes from './Users.module.css'
import User from './User'

const Users = (props) => {
    return (
        <ul className={classes.list}>
            {props.users.map((user) => {
                return (
                    <Link className={classes.link} to='video' key={user._id}>
                        <User 
                            id={user._id}
                            nome={user.nome}
                        />
                    </Link>
                )
            })}
        </ul>
    )
}

export default Users
