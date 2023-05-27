import { ReactElement } from 'react';

import { CardProps } from '../../types';

const CardDetails = ({ data }: CardProps): ReactElement => {
    return (
        <>
            <div
                className="p-5 pb-0 relative z-2 rounded-xl"
                style={{ minHeight: 400 }}
            >
                <div className="flex justify-between font-bold text-lg">
                    <div>{data?.name}</div>
                    <div>{data?.types}</div>
                </div>
                <div className="text-md">
                    {data?.stage &&
                        `${data.stage.replace('Stage', 'Stage ')} Pokémon`}
                </div>
                <div className="text-md mt-5">
                    <p className="font-semibold text-red-500">Attacks</p>
                    {data?.attacks?.map((item) => (
                        <div key={item?.name} className="mt-1">
                            <div className="flex gap-5">
                                <p className="font-semibold">{item?.name}</p>
                                <p className="font-bold text-red-500">
                                    {item?.damage}
                                </p>
                            </div>

                            <p className="text-sm">{item?.effect}</p>
                        </div>
                    ))}
                </div>
                <div className="text-md mt-5">
                    <p className="font-semibold">Weakness</p>
                    {data?.weaknesses?.map((item) => (
                        <div key={item?.type} className="mt-1">
                            <div className="flex gap-5">
                                <p className="font-semibold">{item?.type}</p>
                                <p className="font-bold text-red-500">
                                    {item?.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardDetails;
