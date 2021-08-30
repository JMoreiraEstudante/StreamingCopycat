import { Link } from "react-router-dom"
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Navbar, Nav, Container } from 'react-bootstrap';

import classes from './Header.module.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className={classes.header}>
            <Container>
                <Navbar.Brand>
                    <Link className={classes.logo} to='/video'>
                        <img src={require('./copycat.png').default} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link><Link to='/my-list'><h3>Minha Lista</h3></Link></Nav.Link>
                    <Nav.Link> <Link className={classes.right} to='/'><RiAccountPinCircleFill /></Link></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header
