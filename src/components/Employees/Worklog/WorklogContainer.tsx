import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootStateType} from '../../../redux/redux-store';
import {setEmployeeId, setWorklog, WorklogType} from '../../../redux/worklogReducer';
import Worklog from './Worklog';
import {getWorklog} from '../../../api/api';
import {RouteComponentProps, withRouter} from 'react-router';
import React from 'react';
import {EmployeesType} from '../../../redux/employeesReducer';

//Typing for Users component props
export type WorklogPropsType = mapStatePropsType & mapDispatchPropsType

type RouteParams = {
    id: string
}

type mapStatePropsType = {
    employees: EmployeesType[]
    employeeId: number
    worklog: WorklogType[]
}

type mapDispatchPropsType = {
    setWorklog: (worklog: WorklogType[]) => void
    setEmployeeId: (employeeId: number) => void
}

class WorklogContainer extends React.Component<WorklogPropsType & RouteComponentProps<RouteParams>, {}> {
    componentDidMount() {
        let employeeId = +this.props.match.params.id;
        this.props.setEmployeeId(employeeId);

        getWorklog().then(res => {
            // @ts-ignore
            this.props.setWorklog(res)
        })
    }

    render() {
        return <Worklog {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        employees: state.employeesPage.employees,
        employeeId: state.worklogPage.employeeId,
        worklog: state.worklogPage.worklog
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setWorklog: (worklog: WorklogType[]) => {
            dispatch(setWorklog(worklog))
        },
        setEmployeeId: (employeeId: number) => {
            dispatch(setEmployeeId(employeeId))
        }
    }
}

let WithRouterWorklog = withRouter(WorklogContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterWorklog);