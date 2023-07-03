import { FC } from "react";

interface Props {
  currencies: string[] | undefined;
  onFilter: (selectedCoin: string) => void;
}

const FilterSection: FC<Props> = ({ currencies, onFilter }) => {
  const handleCoinChange = (value: string) => {
    onFilter(value);
  };

  return (
    <div className="relative inline-block w-48 mt-250">
    <select
      className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      onChange={(e) => handleCoinChange(e.target.value)}
    >
      {currencies?.map((coin, index) => (
          <option key={`${coin}-${index}`} value={coin}>
            {coin}
          </option>
        ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 12a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M2 6a8 8 0 1116 0 8 8 0 01-16 0zm8-4a4 4 0 100 8 4 4 0 000-8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
  );
};

export default FilterSection;
