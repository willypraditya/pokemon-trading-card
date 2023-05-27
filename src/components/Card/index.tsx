import { ReactElement, useState } from 'react';

import Image from 'next/image';

import blankPokemon from 'public/blank-pokemon.png';
import cardBack from 'public/card-back.png';

import CardActions from './components/Actions';
import CardDetails from './components/Details';
import { CardProps } from './types';

const Card = ({
    data,
    showDelete = false,
    fetchFavorites = () => {},
    showCard = true,
    onClickCard = () => {},
    gachaSelectedCardId = '',
}: CardProps): ReactElement => {
    const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

    const onClickDetails = () => {
        setIsShowDetails((prevState: boolean) => !prevState);
    };

    return (
        <>
            <div>
                <div className="relative min-h-full z-3 border border-gray-500 rounded-xl drop-shadow-md">
                    {!isShowDetails ? (
                        <>
                            <div
                                className="hover:cursor-pointer"
                                style={{
                                    display: showCard ? 'none' : '',
                                }}
                                onClick={() => {
                                    if (data?.id) {
                                        onClickCard(data?.id);
                                    }
                                }}
                            >
                                <Image
                                    src={cardBack}
                                    alt={'card-back'}
                                    width={500}
                                    height={500}
                                    className="absolute -z-1"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: !showCard ? 'none' : '',
                                }}
                            >
                                <Image
                                    src={
                                        data?.image
                                            ? `${data.image}/high.webp`
                                            : blankPokemon
                                    }
                                    alt={data?.name ?? 'pokemon-image-bg'}
                                    width={500}
                                    height={500}
                                    className="absolute -z-1"
                                    style={{
                                        filter: 'blur(5px) grayscale(50%)',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div className="p-5 pb-0 min-h-full relative z-2 rounded-xl">
                                    <div className="font-bold text-lg">
                                        {data?.name}
                                    </div>
                                    <div className="mt-2 z-2">
                                        <Image
                                            className="mx-auto relative"
                                            src={
                                                data?.image
                                                    ? `${data.image}/high.webp`
                                                    : blankPokemon
                                            }
                                            alt={data?.name ?? 'pokemon-image'}
                                            width={500}
                                            height={500}
                                            style={{ zIndex: 2 }}
                                            loading="eager"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <CardDetails data={data} showDelete={showDelete} />
                    )}

                    <CardActions
                        data={data}
                        showDelete={showDelete}
                        fetchFavorites={fetchFavorites}
                        showCard={showCard}
                        onClickDetails={onClickDetails}
                        gachaSelectedCardId={gachaSelectedCardId}
                    />
                </div>
            </div>
        </>
    );
};

export default Card;
