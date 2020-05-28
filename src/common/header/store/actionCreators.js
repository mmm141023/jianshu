import {constants} from './index'
import axios from 'axios'
import {fromJS} from "immutable";

export const changeFlagTrue = () => ({
    type: constants.CHANGE_FLAG_TRUE
})

export const changeFlagFalse = () => ({
    type: constants.CHANGE_FLAG_FALSE
})
export const whenMouseEnter = () => ({
    type: constants.WHEN_MOUSE_ENTER
})

export const whenMouseLeave = () => ({
    type: constants.WHEN_MOUSE_LEAVE
})

const initCromb = (data) => ({
    type: constants.INIT_CROMBS,
    data
})

export const getCrombs = () => {
    return (dispatch) => {
        axios.get('/api/cromb.json').then((res) => {
            dispatch(initCromb(fromJS(res.data.data)))
        }).catch(() => {
            console.log("error")
        })
    }
}