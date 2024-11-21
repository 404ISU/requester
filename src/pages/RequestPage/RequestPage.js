// src/pages/RequestPage.js
import React from 'react';
import RequestForm from '../../components/RequestForm/RequestForm'; // Убедитесь, что этот путь правильный

const RequestPage = () => {
    return (
        <div>
            <h1>Send a New Request</h1>
            <RequestForm />
        </div>
    );
};

export default RequestPage;