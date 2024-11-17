import React from 'react';

const Music: React.FC = () => {
    return (
        <section id="musica" className="music">
            <div className="music__upcoming">
                <h2 className="music__title" data-aos="fade-up" data-aos-duration="1000">MÚSICA</h2>
                <div className="music__content-container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="music__info">
                        {/* <h3 className="music__subtitle">PRÓXIMO LANZAMIENTO</h3> */}
                        <h4 className="music__song-title">Vaivén</h4>
                        <img src="src/assets/images/music/vaiven.webp" alt="Portada del próximo sencillo Vaivén" className="music__image" data-aos="fade-up" data-aos-duration="1000" loading="lazy"/>
                        <p className="music__description">Una pieza sobre el ir y venir de la mente y el corazón frente a la decisión de emigrar.</p>
                    </div>
                    <div className="music__spotify-preview">
                        <iframe className="music__spotify-iframe" src="https://open.spotify.com/embed/track/1PtNGxIGlraZpgnWyoKTpZ?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"  title="Reproductor de música de Spotify"></iframe>
                        <a href="https://open.spotify.com" className="music__full-song-link">Escuchar ahora</a>
                    </div>
                </div>
            </div>
            <div className="music__videos" role="region" aria-labelledby="music-videos-title">
                <div className="music__video-list">
                    <iframe className="music__video" src="https://www.youtube.com/embed/Ug2Sl9nWimA?si=7vG8VAkA5mywK_jY" title="Video de YouTube: Interpretación musical" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe className="music__video" src="https://www.youtube.com/embed/uCjUJnY3fqQ?si=D4pnHuUQippEvFLW" title="Video de YouTube: Interpretación musical" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe className="music__video" src="https://www.youtube.com/embed/Ug2Sl9nWimA?si=7vG8VAkA5mywK_jY" title="Video de YouTube: Interpretación musical" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default Music;