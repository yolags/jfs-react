import React from 'react';
// import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__links">
                <a href="#" className="footer__link">Política de privacidad</a>
                <p className="footer__link--space"></p>
                <a href="#" className="footer__link">Términos de uso</a>
            </div>
            <p className="footer__copyright">&copy; 2024 José Francisco Sánchez. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;