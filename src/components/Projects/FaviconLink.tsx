import React from 'react';

interface FaviconLinkProps {
    href: string;
    label: string;
}

const FaviconLink: React.FC<FaviconLinkProps> = ({ href, label }) => {
    const url = new URL(href);
    const faviconUrl =
        url.hostname.includes('instagram.com')
            ? 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png'
            : `${url.origin}/favicon.ico`;

    return (
        <a href={href} className="project-card__label">
            <img
                src={faviconUrl}
                alt={`${url.hostname} icon`}
                className="project-card__favicon"
            />
            {label}
        </a>
    );
};

export default FaviconLink;