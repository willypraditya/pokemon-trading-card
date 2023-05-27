import { useEffect, useState } from 'react';

import { CardInterface } from '@/components/Card/types';

const useFavoritesHooks = () => {
    const [favorites, setFavorites] = useState<
        Array<CardInterface> | undefined
    >(undefined);

    const fetchFavorites = () => {
        const favorites = localStorage.getItem('favorites');

        const parsedFavorites = favorites ? JSON.parse(favorites) : [];

        setFavorites(parsedFavorites);
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return {
        favorites,
        fetchFavorites,
    };
};

export default useFavoritesHooks;
