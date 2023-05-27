import { Dispatch, SetStateAction } from 'react';

export interface FilterProps {
    setSearchValue: Dispatch<SetStateAction<string>>;
    rarityValue: string;
    setRarityValue: Dispatch<SetStateAction<string>>;
}
