import { FC, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrencyType } from "@/Types/Cryptos";
import Link from 'next/link';

interface Props {
  cryptoList: CurrencyType[] | undefined
}

const SearchBar: FC<Props> = ({ cryptoList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = cryptoList?.filter((coin: CurrencyType) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      coin.name?.toLowerCase().includes(searchTermLower) ||
      coin.symbol?.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className="my-4 p-4">
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black opacity-40 z-50 ${searchTerm ? "block" : "hidden"}`}
        onClick={() => {
          setSearchTerm("");
        }}
      ></div>
      <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 absolute top-3 left-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12a5 5 0 100-10 5 5 0 000 10z"
          clipRule="evenodd"
        />
      </svg>
    </div>

      {filteredData?.length && filteredData?.length > 0 && 
        <ul
          className={`list-none p-0 text-base relative top-0 left-0 h-200 bg-transparent overflow-y-scroll overflow-x-hidden w-full py-1.5 px-3 bg-white z-50 rounded-md ${searchTerm ? "block" : "hidden"}`}
          style={{height: '200px'}}
        >
          {filteredData?.map((coin: CurrencyType) => (
            <Link key={coin.id} href='/coin/[id]' as={`/coin/${coin.id}`}>
              <a>
                <li className="flex justify-between items-center rounded-md w-full py-1 px-1 hover:bg-gray-900">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-customFontColor">{coin.name}</p>
                    <p className="font-normal text-sm">{coin.symbol?.toUpperCase()}</p>
                  </div>
                  <p>#{coin.market_cap_rank}</p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      }
    </div>
  )
}

export default SearchBar;
