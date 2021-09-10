import { Link } from "react-router-dom"
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {useContext } from "react"

import LoginContext from '../../store/login-context'
import classes from './Header.module.css'

const Header = () => {
    const userCtx = useContext(LoginContext)

    function logout() {
        userCtx.loginPick('')
    }

    return (
        <Navbar bg="light" expand="lg" className={classes.header}>
            <Container>
                <Navbar.Brand>
                    <Link className={classes.logo} to='/video'>
                        <img src={require('./copycat.png').default} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link><Link to='/my-list'><h3>Minha Lista</h3></Link></Nav.Link>
                    <Nav.Link> <Link onClick={logout} to='/'><h3>Logout</h3></Link></Nav.Link>
                    <Nav.Link> <Link className={classes.right} to='/conta'><RiAccountPinCircleFill /></Link></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header
