import { rarityOptions } from './options';
import { FilterProps } from './types';

const Filter = ({
    setSearchValue,
    rarityValue,
    setRarityValue,
}: FilterProps) => {
    return (
        <div className="flex gap-5 justify-center mt-10">
            <div>
                <input
                    className="p-3 rounded-lg border border-gray-500"
                    style={{
                        width: 200,
                        height: 50,
                    }}
                    placeholder="Search By Name"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <div>
                <select
                    className="p-3 rounded-lg -mr-1 border border-gray-500"
                    style={{
                        width: 200,
                        height: 50,
                    }}
                    defaultValue={rarityValue}
                    onChange={(e) => setRarityValue(e.target.value)}
                >
                    {rarityOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
