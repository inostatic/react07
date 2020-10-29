export const SET_DATA = "SET_DATA"
export const DATA_SORT = "DATA_SORT"
export const DATA_SEARCH = "DATA_SEARCH"

let initialState = {
    data: [],
    fullData: []
}

const sortByKey = (key, data) => {
    return data.sort((prev, next)  => {
        if (prev[key] < next[key]) return -1
        if (prev[key] < next[key]) return 1
        return undefined
    })
}

export const data = (state = initialState, action) => {
    if (action.type === SET_DATA) {
        return {
            ...state,
            data: action.payload,
            fullData: action.payload
        }
    } else if (action.type === DATA_SEARCH) {
        if (action.payload === '') {
            return {
                ...state,
                data: state.fullData
            }
        }

        return {
            ...state,
            data: state.fullData.filter(el => el.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
        }
    } else if (action.type === DATA_SORT) {
        const key = action.payload.key
        let sortData
        action.payload.flag
            ? sortData = sortByKey(key, state.data).reverse()
            : sortData = sortByKey(key, state.data)
        return {
            ...state,
            data: [...sortData]
        }
    }
    return state
}

