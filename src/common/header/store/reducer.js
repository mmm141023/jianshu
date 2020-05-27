import {fromJS} from "immutable";
import {constants} from './index'
const initState = fromJS({
    searchFlag: false
})
export default (state = initState, action) => {
    switch (action.type) {
        case constants.CHANGE_FLAG_TRUE:
            return state.set('searchFlag', true)
        case constants.CHANGE_FLAG_FALSE:
            return state.set('searchFlag', false)
        default:
            break
    }
    return state
}