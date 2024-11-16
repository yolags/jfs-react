import React from 'react';
// import './Bio.css';

const Bio: React.FC = () => {
    return (
        <section id="bio" className="bio section-section">
            <h2 className="bio__title" data-aos="fade-up" data-aos-duration="1000">
                BIO
            </h2>
            <div className="bio__content" data-aos="fade-up" data-aos-duration="1000">
                <div className="bio__text">
                    <p className="bio__description">
                        José Francisco Sánchez es un guitarrista, docente y compositor venezolano. Formado en Caracas, Venezuela, bajo la tutela de maestros como Aquiles Báez, Pero Barboza y Edwin Arellano. Ha demostrado ser un músico versátil y creativo, capaz de fluir entre el jazz, el rock y la música de raíz tradicional.<br/><br/>
                        Durante su carrera, José Francisco ha participado en múltiples proyectos desde dúos acompañando a cantantes de diversos géneros, tríos instrumentales, hasta orquestas. Entre estas agrupaciones destaca la Venezuela Big Band Jazz bajo la dirección de Pablo Gil, compartiendo escenario con músicos de renombre como Gerry Weil, Eric Sevá, Jowee Omicil y Silvano Monasterios.<br/><br/>
                        En 2019, José Francisco tuvo una serie de conciertos en Italia junto a Aquiles Báez e Yma América, presentando el proyecto "Venezuela: il popolo, il canto, il lavoro". Este proyecto incluyó un libro del cual es coautor y un álbum en el que grabó las guitarras del tema promocional "Eres la flor del cacao", disponible en plataformas digitales.<br/><br/>
                        Desde 2021, José Francisco reside en Madrid, donde ha destacado como guitarrista acompañando a cantantes como Marina Bravo e Iliana Goncalves. Además, participó en el homenaje al Maestro Aquiles Báez en la sala Galileo Galilei.<br/><br/>
                        En noviembre 2024 publicó su primer sencillo como solista titulado Vaivén, el primero en una serie de lanzamientos que estarán disponibles en todas las plataformas y es miembro de la agrupación Samanes World Music.
                    </p>
                </div>
                <div className="bio__image-wrapper">
                    <img
                        src="src/assets/images/bio/jfrancisco-electric-guitar-bio.webp"
                        alt="José Francisco Sánchez"
                        className="bio__image"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Bio;
