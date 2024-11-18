import React from 'react';
// import './Classes.css';

const Classes: React.FC = () => {
    return (
        <section id="clases" className="classes">
            <div className="classes__banner">
                <h2 className="classes__title" data-aos="fade-up" data-aos-duration="1000">CLASES</h2>
            </div>
            <div className="classes__content" data-aos="fade-up" data-aos-duration="1000">
                <p className="classes__intro">
                Mi método parte de tu necesidad, si quieres aprender de forma sencilla tus canciones favoritas en un programa corto de clases o si quieres profundizar en la armonía, improvisación o composición, te puedo acompañar en el proceso con clases particulares o grupales.<br/><br/>
                Creo que la música es una forma de expresión que favorece el encuentro.
                </p>
                <div className="classes__cards" data-aos="fade-up" data-aos-duration="1000">
                    <article className="class-card class-card--individual">
                        <div className="class-card__header">
                            <h3 className="class-card__title">Clases<br/>individuales</h3>
                            <span className="class-card__icon class-card__icon--individual"></span>
                        </div>
                        <ul className="class-card__features">
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Sesiones personalizadas de 60 minutos
                            </li>
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Método adaptado a tu nivel
                            </li>
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Práctica técnica y teoría musical
                            </li>
                        </ul>
                    </article>
                    <article className="class-card class-card--group">
                        <div className="class-card__header">
                            <h3 className="class-card__title">Clases<br/>colectivas</h3>
                            <span className="class-card__icon class-card__icon--group"></span>
                        </div>
                        <ul className="class-card__features">
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Grupos de hasta 3 personas
                            </li>
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Aprendizaje colaborativo
                            </li>
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Desarrollo de ensamble musical
                            </li>
                        </ul>
                    </article>
                    <article className="class-card class-card--ensemble">
                        <div className="class-card__header">
                            <h3 className="class-card__title">Ensamble<br/>didáctico</h3>
                            <span className="class-card__icon class-card__icon--ensemble"></span>
                        </div>
                        <ul className="class-card__features">
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Haz música en vivo con otros músicos en un estudio
                            </li>
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Aprende en un ambiente adecuado, respetuoso y creativo
                            </li>
                            <li className="class-card__feature">
                                <span className="class-card__bullet mdi--guitar-pick"></span>
                                Aprende los fundamentos para hacer tus propios arreglos
                            </li>
                        </ul>
                    </article>  
                </div>
            </div>    
        </section>
    );
};

export default Classes;