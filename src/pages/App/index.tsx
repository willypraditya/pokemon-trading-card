import { ReactElement } from 'react';

import Card from '@/components/Card';
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import Pagination from '@/components/Pagination';

import Filter from './components/Filter';
import useAppHooks from './hooks';

const App = (): ReactElement => {
    const {
        data,
        loading,
        setSearchValue,
        rarityValue,
        setRarityValue,
        page,
        setPage,
    } = useAppHooks();

    return (
        <div className="relative px-20">
            <Filter
                setSearchValue={setSearchValue}
                rarityValue={rarityValue}
                setRarityValue={setRarityValue}
            />
            <Loading loading={loading}>
                {data?.cards && data?.cards.length > 0 ? (
                    <>
                        <div className="grid grid-cols-4 gap-5 p-6 mt-5">
                            {data?.cards?.map((item) => (
                                <Card key={item?.id} data={item} />
                            ))}
                        </div>
                        <Pagination page={page} setPage={setPage} />
                    </>
                ) : (
                    <NotFound />
                )}
            </Loading>
        </div>
    );
};

export default App;
