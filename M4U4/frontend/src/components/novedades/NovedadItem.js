import React from 'react';


const NovedadItem = (props) => {
    const { title, subtitle, imagen, body, link } = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{body}</h3>
            <h3>{link}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;