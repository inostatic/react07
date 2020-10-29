import {fetchData} from "../../api/api";

const SET_DATA = "SET_DATA"

let initialState = {
    data: []
}

export const data = (state = initialState, action) => {
    if (action.type === SET_DATA) {
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}

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

