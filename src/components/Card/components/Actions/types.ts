import { Dispatch, SetStateAction } from 'react';

import { CardInterface } from '../../types';

export interface CardActionsProps {
    data: CardInterface | null;
    showDelete: boolean;
    fetchFavorites: () => void;
    showCard: boolean;
    onClickDetails: () => void;
    gachaSelectedCardId: string;
}
