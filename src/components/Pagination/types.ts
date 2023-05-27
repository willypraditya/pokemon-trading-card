import { Dispatch, SetStateAction } from 'react';

export interface PaginationProps {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}
