import { AiOutlineLoading } from 'react-icons/ai';

import { LoadingProps } from './types';

const Loading = ({ children, loading }: LoadingProps) => {
    return (
        <div>
            {loading && (
                <div>
                    <AiOutlineLoading
                        className="mt-10 text-grey animate-spin m-auto"
                        size={80}
                    />
                </div>
            )}
            {!loading && children}
        </div>
    );
};

export default Loading;
