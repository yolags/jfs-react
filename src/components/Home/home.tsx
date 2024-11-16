// src/components/Home/Home.tsx
import React from 'react';
// import './Home.css';

const Home: React.FC = () => {
    return (
        <div id="inicio" className="home" role="region">
            <div className="home__content">
                <img src="src\assets\images\jfrancisco-jazz-guitar.webp" alt="José Francisco Sánchez tocando la guitarra" className="home__image"/>
                <div className="home__social">
                    <div className="home__social-icons social-icons">
                        {[
                            { href: 'https://instagram.com', label: 'Instagram', icon: 'fa-instagram' },
                            { href: 'https://youtube.com', label: 'YouTube', icon: 'fa-youtube' },
                            { href: 'https://spotify.com', label: 'Spotify', icon: 'fa-spotify' },
                        ].map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                className="home__social-link"
                                aria-label={label}
                            >
                                <i className={`fa-brands ${icon} home__social-icon social-icon icon-hover-efect`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
