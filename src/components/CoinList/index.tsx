import {CurrencyType } from "@/Types/Cryptos";
import Coin from "@/components/Coin";
import { FC } from "react";

interface Props {
    filteredCoins: CurrencyType[] | undefined
}

const CoinList: FC<Props> = ({ filteredCoins }) => {
    return (
      <>
        {filteredCoins?.map(coin => {
          return (
            <Coin coin={coin} key={coin.id} />
          );
        })}
      </>
    );
  }

  export default CoinList;