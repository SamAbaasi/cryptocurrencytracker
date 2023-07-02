import axios from "@/lib/axios"
import { CurrenciesList, SUPPORTED_CURRENCIES_LIST, Currency } from "./endpoints"
import {CurrencyType, ListOfCurrenciesType } from "@/Types/Cryptos"

export const getSupportedCurrenciesList = async () => {
    const {data} = await axios.get(
        SUPPORTED_CURRENCIES_LIST
    )
    return data as ListOfCurrenciesType
}

export const getCurrenciesList = async (page = 1) => {
    const {data} = await axios.get(
        CurrenciesList({page})
    )
    return data as CurrencyType[]
}
export const getCurrency = async (id: string | string[] | undefined) => {
    const {data} = await axios.get(
        Currency({id})
    )
    return data as CurrencyType
}