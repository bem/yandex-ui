import { useEffect, useState } from 'react';

// https://github.com/gatsbyjs/gatsby/pull/21762/files
export const useActiveHash = (itemIds) => {
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0) {
                        setActiveHash(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px', threshold: 1 },
        );

        itemIds.forEach((id) => {
            observer.observe(document.getElementById(id));
        });

        return () => {
            itemIds.forEach((id) => {
                observer.unobserve(document.getElementById(id));
            });
        };
    }, [itemIds]);

    return activeHash;
};
