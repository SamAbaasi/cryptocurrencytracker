import { CurrencyType } from "@/Types/Cryptos";
import Link from "next/link";
import { FC } from "react";

interface Props {
  coin: CurrencyType;
  rank: number;
}

const formatNumber = (value: number | undefined): string => {
  if (value === undefined) {
    return "0";
  }
  return value.toLocaleString();
};

const Coin: FC<Props> = ({ coin, rank }) => {
  const {
    id,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
    price_change_percentage_7d_in_currency,
    market_cap,
    total_volume,
  } = coin;

  const priceChangePercentageDay = price_change_percentage_24h?.toFixed(2);
  const priceChangePercentageWeek = price_change_percentage_7d_in_currency?.toFixed(2);

  return (
    <tr className="border-b-[1px] border-grey-200 hover:bg-grey-100">
      <td className="pl-2 py-6 font-medium text-sm">{rank}</td>
      <td>
        <div className="flex items-center">
          <Link href="/coin/[id]" as={`/coin/${id}`}>
            {image ? (
              <img
                alt="coin icon"
                className="w-6 h-6 cursor-pointer"
                src={image}
              />
            ) : (
              <div className="w-6 h-6 bg-gray-300"></div>
            )}
            <span className="ml-3 font-medium text-base cursor-pointer first-letter:uppercase">
              {id}
            </span>
            <span className="ml-4 font-medium text-xs text-grey-500 cursor-pointer">
              {symbol}
            </span>
          </Link>
        </div>
      </td>
      <td className="text-right py-6 font-medium text-sm">
        ${formatNumber(current_price)}
      </td>
      <td
        className={`text-right py-6 font-medium text-sm ${
          priceChangePercentageDay &&
          (Number(priceChangePercentageDay) > 0 ? "text-green-400" : "text-red-500")
        }`}
      >
        {priceChangePercentageDay && `${priceChangePercentageDay}%`}
      </td>
      <td
        className={`text-right py-6 font-medium text-sm ${
          priceChangePercentageWeek &&
          (Number(priceChangePercentageWeek) > 0 ? "text-green-400" : "text-red-500")
        }`}
      >
        {priceChangePercentageWeek && `${priceChangePercentageWeek}%`}
      </td>
      <td className="pr-2 text-right py-6 font-medium text-sm">
        ${formatNumber(market_cap)}
      </td>
      <td className="text-right py-6 font-medium text-sm">
        ${formatNumber(total_volume)}
      </td>
    </tr>
  );
};

export default Coin;
