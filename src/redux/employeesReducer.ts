//Action creators types
export type EmployeesActionTypes = ReturnType<typeof setEmployees> | ReturnType<typeof changeLoading>

//Action creators
export const setEmployees = (employees: EmployeesType[]) => ({type: 'SET_EMPLOYEES', employees} as const);
export const changeLoading = () => ({type: 'CHANGE_LOADING'} as const);

//Typing for initialState
export type InitialStateType = typeof initialState
export type EmployeesType = {
    id: number
    firstName: string
    lastName: string
    middleName: string
    birthDate: string
    phone: string
}

const initialState = {
    loading: true,
    employees: [] as EmployeesType[]
}

export const employeesReducer = (state: InitialStateType = initialState, action: EmployeesActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return {
                ...state,
                employees: [...action.employees]
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}