import {fetchData} from "../../api/api";
import {DATA_SEARCH, DATA_SORT, SET_DATA} from "./data";

export const getData = (db) => async (dispatch) => {
    try {
        const data = await fetchData(db)
        await dispatch(setDataAC(data.data))
    } catch (e) {
        throw new Error(e)
    }
}

const setDataAC = (payload) => ({
    type: SET_DATA,
    payload
})
export const searchByStrAC = (payload) => ({
    type: DATA_SEARCH,
    payload
})

export const sortByHeaderAC = (payload) => ({
    type: DATA_SORT,
    payload
})
