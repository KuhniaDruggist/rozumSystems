import React from 'react';
import {Route} from 'react-router-dom';
import EmployeesContainer from './components/Employees/EmployeesContainer';
import WorklogContainer from './components/Employees/Worklog/WorklogContainer';

function App() {
    return (
        <div className="wrapper">
            <Route exact path="/" render={() => <EmployeesContainer/>}/>
            <Route exact path={'/worklog/:id'} render={() => <WorklogContainer/>}/>
        </div>
    );
}

export default App;
