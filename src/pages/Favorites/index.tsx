import { ReactElement } from 'react';

import Card from '@/components/Card';
import NotFound from '@/components/NotFound';

import useFavoritesHooks from './hooks';

const Favorites = (): ReactElement => {
    const { favorites, fetchFavorites } = useFavoritesHooks();

    return (
        <>
            {favorites && favorites.length > 0 ? (
                <div className="grid grid-cols-4 gap-5 p-6">
                    {favorites?.map((item) => (
                        <Card
                            key={item?.name}
                            data={item}
                            showDelete
                            fetchFavorites={fetchFavorites}
                        />
                    ))}
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default Favorites;
