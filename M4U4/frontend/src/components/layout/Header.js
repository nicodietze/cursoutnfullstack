import React from 'react';
import '../../styles/Header.css';



const Header = (props) => {
    return (<header>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Ingrid+Darling&family=Patrick+Hand&display=swap');
</style>
        <div className='holder'>
            <div className='logo'>
                <img src='images/logo.png' width='100' alt='Caja de Rimas' />
                <h1>Caja de Rimas</h1>
            </div>
        </div>
    </header>
    );
}

export default Header;