import { useQuery } from '@tanstack/react-query';
import * as api from '@/API/currencies';

export const useSupportedCurrencies = () => {
    return useQuery(['currencies'], () => api.getCurrenciesList());
}
export const useCurrency = (id: string) => {
    return useQuery(['currency', id], () => api.getCurrency(id));
}
export const useSupportedCurrenciesList = () => {
    return useQuery(['supported-currencies'],() => api.getSupportedCurrenciesList())
}