export const SUPPORTED_CURRENCIES_LIST = '/simple/supported_vs_currencies';
export const CurrenciesList = ({page}: {page: number}): string => `/coins/markets?vs_currency=usd&page=${page}&per_page=20&price_change_percentage=24h,7d`;
export const Currency = ({id}: {id: string | string[] | undefined}): string => `/coins/${id}`;