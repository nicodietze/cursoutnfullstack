import React from "react";
import '../styles/NosotrosPage.css';


const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>El proyecto Caja de Rimas surgió en 2018 como una idea pequeña que fue creciendo y se
                        convirtió en un libro de 6 cuentos ilustrados. La rima nos pareció el estilo que mejor se adaptaba
                        a los lectores que teníamos pensados, niños y niñas en su segunda infancia, no usamos palabras complejas,
                        pero tampoco subestimamos a nuestros lectores.</p>
            </div>
            <h2>¿Quiénes somos?</h2>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/nosotros1.jpg" width="75" alt="Juan Gomez" />
                    <h5>Nicolás A. Dietze</h5>
                    <h6>Autor</h6>
                    <p>Autor: Mi nombre es Nicolás Alejandro Dietze, tengo 35 años, soy profesor de Historia
                    y Ciencias Sociales, tengo un postítulo de Especialización en la enseñanza de las Ciencias Sociales,
                    soy docente de escuelas secundarias desde hace diez años, escribo desde pequeño y 
                    poseo algunas publicaciones en revistas literarias. Amo lo que hago, 
                    soy un ferviente creyente en las siguientes generaciones y en nuestra 
                    responsabilidad para con ellos, precisamente por eso dediqué todos mis esfuerzos 
                    creativos en desarrollar una obra que ayude y deje algo a los más pequeños.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros2.jpg" alt="Juan Gomez" />
                    <h5>Juan Manuel Corvalan</h5>
                    <h6>Ilustrador</h6>
                    <p>Ilustrador: Mi nombre es Juan Manuel Corvalán, tengo 34 años, desde adolescente 
                        ya me interesaba el dibujo, la historieta y estaba perdido en la nueva sensación 
                        de la animación japonesa, cosa que me sedujo a dibujar mis propios personajes y 
                        hacer mis propias historietas. Hice muchos talleres de dibujo, hasta que 
                        decidí aprender con Diego Greco, ahí me encontré con el mundo de la ilustración.
                         Eso fue un puntapié para entrar en el mundo del arte. Me atraía la idea del color 
                         y pase a estudiar con Cristian Canepa (Criska). Durante este periodo me quede 
                         sin trabajo, así que aproveche la indemnización, y decidí tratar de entrar 
                         al mundo de la ilustración infantil. Sin suerte, decidí dar lugar a otra 
                         vocación que tenía: la enseñanza. Estudiando fui desarrollándome como artista plástico. 
                         Participe en varias muestras en Buenos Aires.  
                         Actualmente trabajo como Profesor de Artes visuales en colegios 
                         primarios y secundarios y como ilustrador.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros3.jpg" alt="Juan Gomez" />
                    <h5>Gabriela ...</h5>
                    <h6>Diseñadora</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos, praesentium assumenda quae eum
                        atque reiciendis modi obcaecati velit laudantium? Tenetur dolorem at veniam fugiat vitae odit aliquid
                        necessitatibus vel?</p>
                </div>
            </div>
        </section>
    );
}

export default NosotrosPage;