import {createStore, combineReducers} from 'redux'
import numerosReducers from './reducers/Numeros'

const reducers = combineReducers({
    numeros: numerosReducers
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig