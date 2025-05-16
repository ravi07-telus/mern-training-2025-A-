import {Link} from 'react-router-dom'
// import { Link } from "react-router"

const Header = ()=>{
    return (
        <nav className="nav">
            <a href='/completed-tasks'>Facebook</a>
            <Link to={'/'} className={'nav-link'} >Home</Link>
            <Link to={'/dashboard'} className={'nav-link'} >Dashboard</Link>
            <Link to={'/about'} className={'nav-link'} >About</Link>
            <Link to={'/completed-tasks'} className='nav-link'>Completed Tasks</Link>
        </nav>
    )
}

export default Header;