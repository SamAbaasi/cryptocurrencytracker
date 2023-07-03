import { CurrencyType } from "@/Types/Cryptos";
import Coin from "@/components/Coin";
import { ChangeEvent, FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "@mui/material";
import TableHead from "./components/TableHead";

interface Props {
  coins: CurrencyType[] | undefined;
  isLoading: boolean;
}

const CoinList: FC<Props> = ({ coins, isLoading }) => {
  const [page, setPageNum] = useState(1);
  const coinsPerPage = 20;

  const getPageRange = () => {
    const startIndex = (page - 1) * coinsPerPage;
    const endIndex = startIndex + coinsPerPage;
    return [startIndex, endIndex];
  };

  const renderCoins = () => {
    return coins
      ?.slice(...getPageRange())
      ?.map((coin, index) => {
        const rank = index + 1 + getPageRange()[0];
        return <Coin key={coin.id} rank={rank} coin={coin} />;
      });
  };

  const renderPagination = () => {
    const totalCoins = coins ? coins.length : coinsPerPage;
    const totalPages = Math.ceil(totalCoins / coinsPerPage);

    return (
      <Pagination
        className="w-fit"
        count={totalPages}
        variant="outlined"
        color="primary"
        size="small"
        onChange={(e: ChangeEvent<unknown>, val: number) => {
          setPageNum(val);
        }}
      />
    );
  };

  return (
    <>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-[700px] mx-auto mt-8">
          <TableHead />
          {isLoading ? (
            <tbody>
              {Array.from({ length: coinsPerPage }, (_, index) => (
                <Skeleton key={index} className="h-12 my-2" />
              ))}
            </tbody>
          ) : (
            <tbody>{renderCoins()}</tbody>
          )}
        </table>
      </div>
      <div className="flex z-0 justify-center">{renderPagination()}</div>
    </>
  );
};

export default CoinList;
