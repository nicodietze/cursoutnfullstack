import '../styles/NovedadesPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {
    
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className='holder'>
            {loading ? (
                <p>Cargando, esto puede demorar unos segundos...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                body={item.cuerpo} link={item.enlace} imagen={item.imagen} ></NovedadItem>)
            )}
        </section>
    );
}

export default NovedadesPage;