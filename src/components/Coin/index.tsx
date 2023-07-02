import { CurrencyType } from "@/Types/Cryptos";
import { FC } from "react";

interface Props {
    coin: CurrencyType
}
const Coin: FC<Props> =  ({coin}) => {
    
    return (
      <div>
        {coin.name}
      </div>
    );
  };
  export default Coin;