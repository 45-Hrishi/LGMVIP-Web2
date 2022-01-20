import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Load from './components/Load';
import Card from './components/Card';

function App() {
    const [fetchData, setfetchData] = useState(false);
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);

    const getData = async () => {
        setLoad(true);
        const response = await fetch('https://reqres.in/api/users?page=1');
        const res = await response.json();
        setUsers(res.data);
        setInterval(() => {
            setfetchData(true);
        }, 1000);
    };

    return (
        <>
            <Nav getData={getData} />

            {load ? (
                fetchData ? (
                    <Card users={users} />
                ) : (
                    <Load />
                )
            ) : (
                <Home getData={getData} />
            )}
        </>
    );
}

export default App; 