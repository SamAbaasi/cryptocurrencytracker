import { CurrencyType } from "@/Types/Cryptos";
import axios from "@/lib/axios";

export const getSupportedCurrenciesList = async () => {
  const {data} = await axios.get('/simple/supported_vs_currencies');
  return data as string[];
};

export const getCurrenciesList = async (page: number) => {
  const {data} = await axios.get(
    `/coins/markets?vs_currency=usd&page=${page}&per_page=200&price_change_percentage=24h,7d`
  );
  return data as CurrencyType[];
};

export const getCurrency = async (id: string | string[] | undefined) => {
  const {data} = await axios.get(`/coins/${id}`);
  return data as CurrencyType;
};