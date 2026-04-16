import React, { useState, useEffect } from 'react';
import ScannerDisplay from './ScannerDisplay';
import StudentList from './StudentList';

const App = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api');
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Easy Students</h1>
            <ScannerDisplay />
            <StudentList students={students} />
        </div>
    );
};

export default App;