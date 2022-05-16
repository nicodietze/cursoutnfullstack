import React from 'react';


const NovedadItem = (props) => {
    const { title, subtitle, imagen, body, link } = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{body}</h3>
            <a href = {link}>Toque aquí para seguir el enlace</a>
            <br></br>
            <img src={imagen} />
            <p>Si el enlace no funciona, copie y pegue esta dirección en su navegador:</p>
            <div dangerouslySetInnerHTML={{ __html: link }} />
            <hr />
        </div>
    );
}

export default NovedadItem;