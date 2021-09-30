import {combineReducers, createStore} from 'redux';
import {employeesReducer} from './employeesReducer';
import {worklogReducer} from './worklogReducer';

const rootReducer = combineReducers({
    employeesPage: employeesReducer,
    worklogPage: worklogReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);