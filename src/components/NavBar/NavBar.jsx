import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
<header className="header">
    <p>FitnessReact</p>
    <Link to='/'>
                <img
                    src='../../../public/logo.png'
                    alt="FitnessReact"
                />
            </Link>
<ul>
<li><NavLink to='/category/creatina' className={nav => nav.isActive ? 'nav-active' : ''}>Creatinas</NavLink></li>
                <li><NavLink to='/category/proteina' className={nav => nav.isActive ? 'nav-active' : ''}>Proteinas</NavLink></li>
                <li><NavLink to='/category/preentreno' className={nav => nav.isActive ? 'nav-active' : ''}>Entrenos</NavLink></li>
</ul>
<CartWidget />
</header>
    )
  }
  export default NavBar