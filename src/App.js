import React from 'react'
import useStyles from './index.css';
import Todo from './components/Todo';

function App() {
    return (

        <div>
            <h1>My Todos</h1>
            <Todo text='Learn React' />
            <Todo text='Master React' />
            <Todo text='Explore React' />

        </div>


    )
}

export default App 