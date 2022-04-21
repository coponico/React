import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
<header classname="header">
    <p>FitnessReact</p>
    <img src="../../../img/react.png" alt=""></img>
<ul>
    <li><a href="http://www.google.com">Inicio</a></li>
    <li><a href="http://www.google.com">xcosa</a></li>
    <li><a href="http://www.google.com">xotracosa</a></li>
</ul>
<CartWidget />
</header>
    )
  }
  export default NavBar