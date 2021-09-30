import React from 'react';
import styles from './Employees.module.css';
import {EmployeesPropsType} from './EmployeesContainer';
import {NavLink} from 'react-router-dom';

const Employees = (props: EmployeesPropsType) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Список врачей</h2>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                <tr className={styles.headRow}>
                    <th className={styles.headColumn}>ID</th>
                    <th className={styles.headColumn} align={'left'}>Name</th>
                    <th className={styles.headColumn}>Date of birthday</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.employees.map(e => {
                            const birth = new Date(e.birthDate);
                            const year = birth.getFullYear();
                            const month = (birth.getMonth() + 1).toString().padStart(2, '0');
                            const day = birth.getDate().toString().padStart(2, '0');
                            const newDate = `${day}/${month}/${year}`;

                            return (
                                <tr key={e.id}>
                                    <th className={styles.bodyColumn}>{e.id}</th>
                                    <th className={styles.bodyColumn} align={'left'}>
                                        <NavLink className={styles.link} to={`/worklog/${e.id}`}>
                                            {e.lastName + ' ' + e.firstName + ' ' + e.middleName}
                                        </NavLink>
                                    </th>
                                    <th className={styles.bodyColumn}>{newDate}</th>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default Employees;