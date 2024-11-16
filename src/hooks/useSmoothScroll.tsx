import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        const handleSmoothScroll = (event: MouseEvent) => {
            const target = event.target as HTMLAnchorElement;

            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                event.preventDefault();
                const id = target.getAttribute('href')!.substring(1);
                const targetElement = document.getElementById(id);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, []);
};

export default useSmoothScroll;
