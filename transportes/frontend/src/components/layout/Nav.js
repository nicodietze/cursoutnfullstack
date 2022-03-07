import {Link} from 'react-router-dom';
import '/UTN/transportes/frontend/src/styles/Nav.css';

const Nav = (props) => {
    return (
        <nav>
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
