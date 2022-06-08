import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
<header className="header">
    <Link to='/'>
        <div>
    <p className="textoLogo">FitnessReact</p>
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
                    alt="FitnessReact"
                />
                </div>
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