import '../styles/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Contacto Rápido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="enviar" /></p>

                </form>
            </div>
            <div className="columna-datos">
                <h2>Otras vias de contacto</h2>
                <p>También se pueden comunicar con nosotros ...</p>
                <ul>
                    <li>Teléfono: 4444-4444</li>
                    <li>Email: contacto@cajaderimas.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;