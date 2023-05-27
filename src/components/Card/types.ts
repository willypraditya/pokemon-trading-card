export interface CardInterface {
    __typename?: 'Card';
    id: string;
    name: string;
    image?: string | null;
    stage?: string | null;
    types?: Array<string | null> | null;
    attacks?: Array<{
        __typename?: 'AttacksListItem';
        name: string;
        damage?: string | null;
        effect?: string | null;
    } | null> | null;
    weaknesses?: Array<{
        __typename?: 'WeakResListItem';
        type: string;
        value?: string | null;
    } | null> | null;
    disabled?: boolean;
}

export interface CardProps {
    data: CardInterface | null;
    showDelete?: boolean;
    fetchFavorites?: () => void;
    showCard?: boolean;
    onClickCard?: (cardId: string) => void;
    gachaSelectedCardId?: string;
}
