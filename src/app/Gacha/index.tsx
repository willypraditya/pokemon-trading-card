import { ReactElement } from 'react';

import Card from '@/components/Card';
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';

import useGachaHooks from './hooks';

const Gacha = (): ReactElement => {
    const { randomizedData, loading, showCards, onSelectCard, selectedCardId } =
        useGachaHooks();

    return (
        <Loading loading={loading}>
            <div className="grid grid-cols-4 gap-5 p-6">
                {randomizedData.map((item, index) => (
                    <Card
                        key={`${item.id} - ${index}`}
                        data={item}
                        showCard={showCards}
                        onClickCard={onSelectCard}
                        gachaSelectedCardId={selectedCardId}
                    />
                ))}
            </div>
        </Loading>
    );
};

export default Gacha;
