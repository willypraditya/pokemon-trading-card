import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from 'react-icons/io';

import { PaginationProps } from './types';

const Pagination = ({ page, setPage }: PaginationProps) => {
    const onClickPrevPage = () => {
        setPage((prevState: number) => prevState - 1);
    };

    const onClickNextPage = () => {
        setPage((prevState: number) => prevState + 1);
    };

    return (
        <div>
            {page !== 1 && (
                <div
                    className="absolute left-10 top-1/2 text-grey hover:cursor-pointer"
                    onClick={onClickPrevPage}
                >
                    <IoIosArrowDropleftCircle size={40} />
                </div>
            )}

            <div
                className="absolute right-10 top-1/2 text-grey hover:cursor-pointer"
                onClick={onClickNextPage}
            >
                <IoIosArrowDroprightCircle size={40} />
            </div>
        </div>
    );
};

export default Pagination;
