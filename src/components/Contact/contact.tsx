import React from 'react';
// import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contacto" className="contact">
            <div className='contact__overlay'>
                <div className="contact__container" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="contact__title" data-aos="fade-up" data-aos-duration="1000">CONTACTO</h2>   
                    <p className="contact__description">¿Tienes preguntas o quieres saber más sobre mis clases o proyectos? No dudes en escribirme.</p>
                    <div className="contact__info">
                        <div className="contact__info-email">
                            <p className="contact__email-description">Correo electrónico:</p>
                            <a href="jfranciscomusica@gmail.com" className="contact__email" aria-label="Enviar correo a jfranciscomusica@gmail.com">jfranciscomusica@gmail.com</a>
                        </div>
                        <div className="contact__follow">
                            <p className="contact__follow-description">¡Sígueme en redes!</p>
                            <div className="contact__social-icons social-icons">
                                <a href="https://instagram.com" className="contact__social-link social-icon  icon-hover-efect" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram home__social-icon"></i>
                                </a>
                                <a href="https://youtube.com" className="contact__social-link social-icon icon-hover-efect" aria-label="YouTube">
                                    <i className="fa-brands fa-youtube home__social-icon"></i>
                                </a>
                                <a href="https://spotify.com" className="contact__social-link social-icon icon-hover-efect" aria-label="Spotify">
                                    <i className="fa-brands fa-spotify home__social-icon"></i>
                                </a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;