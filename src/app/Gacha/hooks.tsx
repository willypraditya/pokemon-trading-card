import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { CardInterface } from '@/components/Card/types';

import CARDS_QUERY from '@/gql/cards';

const useGachaHooks = () => {
    const [randomizedPage, setRandomizedPage] = useState<number | undefined>();
    const [randomizedCount, setRandomizedCount] = useState<
        number | undefined
    >();

    const [randomizedData, setRandomizedData] = useState<Array<CardInterface>>(
        [],
    );
    const [showCards, setShowCards] = useState<boolean>(false);
    const [selectedCardId, setSelectedCardId] = useState<string>();

    useEffect(() => {
        setRandomizedPage(Math.floor(Math.random() * 799));
        setRandomizedCount(Math.floor(Math.random() * (20 - 5)) + 5);
    }, []);

    const { loading } = useQuery(CARDS_QUERY, {
        variables: {
            pagination: {
                page: randomizedPage ? randomizedPage : 1,
                count: randomizedCount ? randomizedCount : 20,
            },
        },
        onCompleted: (data) => {
            let cardData = data.cards;

            let randomizedData: Array<CardInterface> = [];

            if (cardData) {
                for (let index = 0; index < 4; index++) {
                    const randomIndex = Math.floor(
                        Math.random() * cardData.length,
                    );

                    const randomCard: CardInterface = cardData[randomIndex]!;

                    cardData = cardData.filter(
                        (item) => item?.id !== randomCard.id,
                    );

                    randomizedData.push(randomCard);
                }
            }

            setRandomizedData(randomizedData);
        },
        skip: !randomizedPage || !randomizedCount,
    });

    const onSelectCard = (cardId: string) => {
        setShowCards(true);
        setSelectedCardId(cardId);
    };

    return {
        randomizedData,
        loading,
        showCards,
        onSelectCard,
        selectedCardId,
    };
};

export default useGachaHooks;
