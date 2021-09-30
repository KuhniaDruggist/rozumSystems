//Action creators types
export type WorklogActionTypes = ReturnType<typeof setWorklog> | ReturnType<typeof setEmployeeId>

//Action creators
export const setWorklog = (worklog: WorklogType[]) => ({type: 'SET_WORKLOG', worklog} as const);
export const setEmployeeId = (employeeID: number) => ({type: 'SET_EMPLOYEE_ID', employeeID} as const);

//Typing for initialState
export type InitialStateType = typeof initialState

export type WorklogType = {
    id: number
    employee_id: number
    from: string
    to: string
}

const initialState = {
    employeeId: 0,
    worklog: [] as WorklogType[]
}

export const worklogReducer = (state: InitialStateType = initialState, action: WorklogActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_WORKLOG':
            return {
                ...state,
                worklog: [...action.worklog]
            }
        case 'SET_EMPLOYEE_ID':
            return {
                ...state,
                employeeId: action.employeeID
            }
        default:
            return state
    }
}