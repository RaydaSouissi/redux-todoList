import {createStore,combineReducers} from 'redux'
import index from './reducers/index.js'
import todos from './reducers/todos.js'
import visibilityFilter from './reducers/visibilityFilter.js'

const store=createStore(combineReducers({
  index:index,
  todos:todos,
  visibilityFilter:visibilityFilter
}))
export default store