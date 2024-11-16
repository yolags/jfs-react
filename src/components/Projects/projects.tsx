import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="projects section-section">
            <h2 className="projects__title" data-aos="fade-up" data-aos-duration="1000">PROYECTOS</h2>
            <div className="projects__cards">
                <article className="project-card" data-aos="fade-up" data-aos-duration="1000">
                    <div className="project-card__image-container">
                        <img src="src\assets\images\projects\proyecto-samanes.webp" alt="Imagen del agrupación Samanes" className="project-card__image" loading="lazy"/>
                        <div className="project-card__overlay">
                            <h3 className="project-card__title">Samanes</h3>
                        </div>
                    </div>
                    <div className="project-card__content">
                        <p className="project-card__description">Guitarrista y arreglista en el trío Samanes, una agrupación que combina voz, violín, guitarra y elementos de percusión menor, creando una fusión que celebra las raíces tradicionales de diversas culturas.</p>
                        <a href="https://www.youtube.com/@SamanesWorldMusic" target="_blank" className="project-card__label">
                            <span className="project-card__favicon"></span>
                            <span>Samanes</span>
                        </a>
                    </div>
                </article>
                <article className="project-card" data-aos="fade-up" data-aos-duration="1000">
                    <div className="project-card__image-container">
                        <img src="src\assets\images\projects\venezuela-musica-trabajo.webp" alt="Imagen del Proyecto Venezuela Música y Trabajo" className="project-card__image" loading="lazy"/>
                        <div className="project-card__overlay">
                            <h3 className="project-card__title">Venezuela Música y Trabajo</h3>
                        </div>
                    </div>
                    <div className="project-card__content">
                        <p className="project-card__description">Como coordinador de proyectos culturales de la Asociación Civil Trabajo y Persona, participé en la conceptualización, coordinación y curaduría del disco 'Venezuela, Música y Trabajo' y el libro 'Venezuela Il popolo, il canto il lavoro'. Una propuesta artístico cultural que refleja una concepción de la vida como unidad entre el ser y el hacer, inspirada en la tradición de cantos de trabajo venezolanos.</p>
                        <a href="https://trabajoypersona.org/musicaytrabajo/" target="_blank" className="project-card__label" aria-label="Enlace a la página de Trabajo y persona">
                            <span className="project-card__favicon"></span>
                            <span>Música y Trabajo</span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=video_id" target="_blank" className="project-card__label" aria-label="Ver video en YouTube">
                            <span className="project-card__favicon"></span>
                            <span>YouTube</span>
                        </a>
                    </div>
                </article>
                <article className="project-card" data-aos="fade-up" data-aos-duration="1000">
                    <div className="project-card__image-container">
                        <img src="src\assets\images\projects\caribe-mediterraneo.webp" alt="Imagen de la agrupación Caribe Mediterráneo" className="project-card__image" loading="lazy"/>
                        <div className="project-card__overlay">
                            <h3 className="project-card__title">Caribe Mediterráneo</h3>
                        </div>
                    </div>
                    <div className="project-card__content">
                        <p className="project-card__description">
                            Guitarrista y arreglista en el proyecto Caribe Mediterráneo, una propuesta en la que convergen la música latinoamericana, el jazz y el pop contemporáneo...
                        </p>
                        <div className="project-card__labels">
                            <a href="https://www.youtube.com/watch?v=video_id" target="_blank" className="project-card__label" aria-label="Ver en YouTube">
                                <span className="project-card__favicon"></span>
                                <span>YouTube</span>
                            </a>
                            <a href="https://www.instagram.com/caribe.mediterraneo/" target="_blank" className="project-card__label" aria-label="Ver en Instagram">
                                <span className="project-card__favicon"></span>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;