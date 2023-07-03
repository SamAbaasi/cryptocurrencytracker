import * as api from '@/API/currencies';
import { CurrencyType } from '@/Types/Cryptos';
import { useQuery } from '@tanstack/react-query';

export function useSupportedCurrencies() {
  return useQuery<string[]>(['currencies'], api.getSupportedCurrenciesList);
}

export function useCurrency(id: string) {
  return useQuery<CurrencyType>(['currency', id], () => api.getCurrency(id));
}

export function useCurrenciesList(page: number) {
  return useQuery<CurrencyType[]>(['currenciesList', page], () =>
    api.getCurrenciesList(page)
  );
}