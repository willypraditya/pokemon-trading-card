import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { useDebounce } from '@/utils/useDebounce';

import CARDS_QUERY from '@/gql/cards';

const useAppHooks = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedSearchValue = useDebounce(searchValue, 0.5);

    const [rarityValue, setRarityValue] = useState<string>('');

    const [page, setPage] = useState<number>(1);

    const { data, loading } = useQuery(CARDS_QUERY, {
        variables: {
            filters: {
                name: debouncedSearchValue,
                rarity: rarityValue,
            },
            pagination: {
                page: page,
                count: 12,
            },
        },
    });

    return {
        data,
        loading,
        setSearchValue,
        rarityValue,
        setRarityValue,
        page,
        setPage,
    };
};

export default useAppHooks;
