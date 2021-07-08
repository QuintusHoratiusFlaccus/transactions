import {FilterInterface} from "../Interfaces/FilterInterface";
import {TransactionType} from "../Interfaces/Types";

export const generateDefaultState = (transaction: TransactionType): FilterInterface => {
    const filterMarkup: FilterInterface = {
        status: [],
        id: '',
        username: '',
        currency: []
    }

    if (transaction === 'withdrawal') return {...filterMarkup, isLocked: []}
    return {...filterMarkup}
}