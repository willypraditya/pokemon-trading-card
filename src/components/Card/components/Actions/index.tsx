import { useEffect, useState } from 'react';

import Image from 'next/image';

import detailsIcon from 'public/details.png';
import loveIcon from 'public/love.png';
import trashIcon from 'public/trash.png';
import { toast } from 'react-toastify';

import { CardActionsProps } from './types';

import { CardInterface } from '../../types';

const CardActions = ({
    data,
    showDelete,
    fetchFavorites,
    showCard,
    onClickDetails,
    gachaSelectedCardId,
}: CardActionsProps) => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
    }, [animate]);

    const addToFavorites = (data: CardInterface) => {
        const currFav = localStorage.getItem('favorites');

        const parsedCurrFav = currFav ? JSON.parse(currFav) : [];

        if (!parsedCurrFav.some((item: CardInterface) => item.id === data.id)) {
            parsedCurrFav.unshift(data);
        }

        localStorage.setItem('favorites', JSON.stringify(parsedCurrFav));

        toast.success(`${data.name} has been added to Favorites!`);
    };

    const removeFromFavorites = (data: CardInterface) => {
        const currFav = localStorage.getItem('favorites');

        const parsedCurrFav = currFav ? JSON.parse(currFav) : [];

        const newFav = parsedCurrFav.filter(
            (item: CardInterface) => item.id !== data.id,
        );

        localStorage.setItem('favorites', JSON.stringify(newFav));

        fetchFavorites();

        toast.warning(`${data.name} has been removed from Favorites!`);
    };

    return (
        <>
            <div
                style={{
                    marginTop: 70,
                    display: !showCard ? 'none' : '',
                }}
            >
                <div className="absolute bottom-0 w-full">
                    <div
                        className="relative z-0 bg-white"
                        style={{
                            height: '50px',
                            background:
                                'radial-gradient(100% 60% at top, transparent 50%, white 50%)',
                        }}
                    />
                    <div className="relative z-0 bg-white rounded-b-xl p-5 pt-0">
                        <div className="flex justify-center items-center gap-5">
                            {(gachaSelectedCardId === data?.id ||
                                gachaSelectedCardId === '') && (
                                <>
                                    {!showDelete ? (
                                        <div>
                                            <Image
                                                src={loveIcon}
                                                alt="love"
                                                className={`${
                                                    animate && 'animate-ping'
                                                } mx-auto hover:cursor-pointer`}
                                                onClick={() => {
                                                    setAnimate(true);
                                                    if (data) {
                                                        addToFavorites(data);
                                                    }
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <Image
                                                src={trashIcon}
                                                alt="trash"
                                                className={`${
                                                    animate && 'animate-ping'
                                                } mx-auto hover:cursor-pointer`}
                                                onClick={() => {
                                                    setAnimate(true);
                                                    if (data) {
                                                        removeFromFavorites(
                                                            data,
                                                        );
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                </>
                            )}

                            <div className="mt-1">
                                <Image
                                    src={detailsIcon}
                                    alt="details"
                                    className={`mx-auto hover:cursor-pointer`}
                                    width={45}
                                    onClick={() => onClickDetails()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardActions;
