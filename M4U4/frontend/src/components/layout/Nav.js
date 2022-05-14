import {Link} from 'react-router-dom';
import '../../styles/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Ingrid+Darling&family=Patrick+Hand&display=swap');
</style>
            <div className='holder'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
