import React from 'react';
import styles from './Employees.module.css';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {changeLoading, EmployeesType, setEmployees} from '../../redux/employeesReducer';
import {RootStateType} from '../../redux/redux-store';
import Employees from './Employees';
import {getEmployees} from '../../api/api';
import Preloader from '../common/Preloader/Preloader';

//Typing for Users component props
export type EmployeesPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    loading: boolean
    employees: EmployeesType[]
}

type mapDispatchPropsType = {
    setEmployees: (employees: EmployeesType[]) => void
    changeLoading: () => void
}

class EmployeesContainer extends React.Component<EmployeesPropsType> {
    componentDidMount() {
        getEmployees().then(res => {
            // @ts-ignore
            this.props.setEmployees(res.sort((a, b) => a.lastName.toUpperCase() <= b.lastName.toUpperCase() ? -1 : 1))
            this.props.changeLoading()
        })
    }

    render() {
        const loading = this.props.loading

        if (loading) {
            return (
                <div className={styles.preloader}>
                    <Preloader/>
                </div>
            )
        }

        return <Employees {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        loading: state.employeesPage.loading,
        employees: state.employeesPage.employees
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setEmployees: (employees: EmployeesType[]) => {
            dispatch(setEmployees(employees))
        },
        changeLoading: () => {
            dispatch(changeLoading())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);