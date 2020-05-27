import {fromJS} from "immutable";
import {constants} from './index'
const initState = fromJS({
    searchFlag: false,
    mouseFlag: false
})
export default (state = initState, action) => {
    switch (action.type) {
        case constants.CHANGE_FLAG_TRUE:
            return state.set('searchFlag', true)
        case constants.CHANGE_FLAG_FALSE:
            return state.set('searchFlag', false)
        case constants.WHEN_MOUSE_ENTER:
            return state.set('mouseFlag', true)
        case constants.WHEN_MOUSE_LEAVE:
            return state.set('mouseFlag', false)
        default:
            break
    }
    return state
}