import React from 'react';
import FaviconLink from './FaviconLink';

const Projects: React.FC = () => {
    const projectData = [
        {
            title: 'Samanes',
            description:
                'Guitarrista y arreglista en el trío Samanes, una agrupación que combina voz, violín, guitarra y elementos de percusión menor, creando una fusión que celebra las raíces tradicionales de diversas culturas.',
            image: 'src/assets/images/projects/proyecto-samanes.webp',
            alt: 'Imagen del agrupación Samanes',
            links: [
                {
                    href: 'https://www.youtube.com/@SamanesWorldMusic',
                    label: 'Samanes',
                },
            ],
        },
        {
            title: 'Venezuela Música y Trabajo',
            description:
                "Como coordinador de proyectos culturales de la Asociación Civil Trabajo y Persona, participé en la conceptualización, coordinación y curaduría del disco 'Venezuela, Música y Trabajo' y el libro 'Venezuela Il popolo, il canto il lavoro'. Una propuesta artístico cultural que refleja una concepción de la vida como unidad entre el ser y el hacer, inspirada en la tradición de cantos de trabajo venezolanos.",
            image: 'src/assets/images/projects/venezuela-musica-trabajo.webp',
            alt: 'Imagen del Proyecto Venezuela Música y Trabajo',
            links: [
                {
                    href: 'https://trabajoypersona.org/musicaytrabajo/',
                    label: 'Música y Trabajo',
                },
                {
                    href: 'https://www.youtube.com/watch?v=video_id',
                    label: 'YouTube',
                },
            ],
        },
        {
            title: 'Caribe Mediterráneo',
            description:
                'Guitarrista y arreglista en el proyecto Caribe Mediterráneo, una propuesta en la que convergen la música latinoamericana, el jazz y el pop contemporáneo.',
            image: 'src/assets/images/projects/caribe-mediterraneo.webp',
            alt: 'Imagen de la agrupación Caribe Mediterráneo',
            links: [
                {
                    href: 'https://www.youtube.com/watch?v=video_id',
                    label: 'YouTube',
                },
                {
                    href: 'https://www.instagram.com/caribe.mediterraneo/',
                    label: 'Instagram',
                },
            ],
        },
    ];

    return (
        <section id="proyectos" className="projects section-section">
            <h2 className="projects__title" data-aos="fade-up" data-aos-duration="1000">
                PROYECTOS
            </h2>
            <div className="projects__cards">
                {projectData.map((project, index) => (
                    <article
                        key={index}
                        className="project-card"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="project-card__image-container">
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="project-card__image"
                                loading="lazy"
                            />
                            <div className="project-card__overlay">
                                <h3 className="project-card__title">{project.title}</h3>
                            </div>
                        </div>
                        <div className="project-card__content">
                            <p className="project-card__description">{project.description}</p>
                            <div className="project-card__labels">
                                {project.links.map((link) => (
                                    <FaviconLink
                                        key={link.href}
                                        href={link.href}
                                        label={link.label}
                                    />
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;