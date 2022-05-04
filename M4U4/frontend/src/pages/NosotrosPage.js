import Reac from "react";
import '../styles/NosotrosPage.css';


const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque natus suscipit ipsa illo, magni excepturi
                    voluptatum quidem nostrum consequuntur, molestias amet commodi similique odio quod incidunt pariatur
                    necessitatibus? Labore, dolor?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores praesentium ipsum? Saepe itaque
                    sint excepturi numquam odio voluptate, sapiente autem rem quaerat provident quae eius explicabo recusandae
                    minus. Nisi.</p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/nosotros1.jpg" width="75" alt="Juan Gomez" />
                    <h5>Nicolás A. Dietze</h5>
                    <h6>Escritor</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos, praesentium assumenda quae eum
                        atque reiciendis modi obcaecati velit laudantium? Tenetur dolorem at veniam fugiat vitae odit aliquid
                        necessitatibus vel?</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros2.jpg" alt="Juan Gomez" />
                    <h5>Juan Manuel Corvalan</h5>
                    <h6>Ilustrador</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos, praesentium assumenda quae eum
                        atque reiciendis modi obcaecati velit laudantium? Tenetur dolorem at veniam fugiat vitae odit aliquid
                        necessitatibus vel?</p>
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