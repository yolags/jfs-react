import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            const headerHeight = header?.offsetHeight || 0;
            setIsNavbarFixed(window.scrollY > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        handleScroll(); // Llamada inicial

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const toggleMenuHandler = () => {
        setIsMenuOpen((prev) => !prev);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    };

    return (
        <header className="header" id="header">
            <h1 className="header__title">JOSÉ FRANCISCO SÁNCHEZ</h1>
            <nav
                className={`navbar ${isNavbarFixed ? 'navbar--fixed' : ''}`}
                id="navbar"
                aria-label="Menú principal"
            >
                <ul className={`navbar__list ${isMenuOpen ? 'open' : ''}`} id="menu">
                    {['Inicio', 'Bio', 'Clases', 'Música', 'Proyectos', 'Contacto'].map((item) => (
                        <li className="navbar__item icon-hover-efect" key={item}>
                            <a
                                href={`#${item === 'Música' ? 'musica' : item.toLowerCase()}`}
                                className="navbar__link"
                                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="toggle-menu"
                    id="toggleMenu"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenuHandler}
                    aria-label="Abrir/cerrar menú de navegación"
                >
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;