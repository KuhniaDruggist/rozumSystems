import React from 'react';
import styles from '../Employees.module.css'
import {WorklogPropsType} from './WorklogContainer';

const Worklog = (props: WorklogPropsType) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Время присутствия врача в больничном отделении:</h2>
            <p className={styles.name}>{props.employees.map(e => e.id === props.employeeId ? `${e.lastName} ${e.firstName} ${e.middleName}` : '')}</p>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                <tr className={styles.headRow}>
                    <th className={styles.headColumn}>Date</th>
                    <th className={styles.headColumn}>From Time</th>
                    <th className={styles.headColumn}>To Time</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.worklog.map(e => {
                            if (e.employee_id !== props.employeeId) {
                                return undefined
                            }

                            const dateTimeFrom = new Date(e.from);
                            const dateTimeTo = new Date(e.to);

                            const getDate = (date: any) => {
                                const year = date.getFullYear();
                                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                                const day = date.getDate().toString().padStart(2, '0');
                                return `${day}/${month}/${year}`
                            }

                            const getTime = (time: any) => {
                                const hours = time.getHours().toString().padStart(2, '0');
                                const minutes = time.getMinutes().toString().padStart(2, '0');
                                return `${hours}:${minutes}`;
                            }

                            return (
                                <tr key={e.id}>
                                    <th className={styles.bodyColumn}>{getDate(dateTimeFrom)}</th>
                                    <th className={styles.bodyColumn}>{getTime(dateTimeFrom)}</th>
                                    <th className={styles.bodyColumn}>{getTime(dateTimeTo)}</th>
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

export default Worklog;