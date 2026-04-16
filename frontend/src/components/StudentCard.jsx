import React from 'react';
import PropTypes from 'prop-types';

const StudentCard = ({ student }) => {
    return (
        <div className="student-card">
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Email: {student.email}</p>
            <p>Major: {student.major}</p>
        </div>
    );
};

StudentCard.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
    }).isRequired,
};

export default StudentCard;