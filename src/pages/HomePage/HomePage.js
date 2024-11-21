// src/pages/HomePage.js
import React from 'react';
import RequestList from '../../components/RequestList/RequestList.js';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Postman Clone</h1>
            <RequestList />
        </div>
    );
};

export default HomePage;
