import React from 'react';
// import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header" id="header">
            <h1 className="header__title">JOSÉ FRANCISCO SÁNCHEZ</h1>
            <nav className="navbar" id="navbar" aria-label="Menú principal">
                <ul className="navbar__list" id="menu">
                    {['Home', 'Bio', 'Clases', 'Música', 'Proyectos', 'Contacto'].map((item) => (
                        <li className="navbar__item icon-hover-efect" key={item}>
                            <a 
                                href={`#${item === 'Música' ? 'musica' : item.toLowerCase()}`} 
                                className="navbar__link"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="toggle-menu"
                    id="toggleMenu"
                    aria-expanded="false"
                    aria-label="Abrir/cerrar menú de navegación"
                >
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;