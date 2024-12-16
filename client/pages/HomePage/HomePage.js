// src/pages/HomePage.js
import React from 'react';
import RequestList from '../../components/RequestList/RequestList.js';

const HomePage = () => {
    return (
        <div>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            <RequestList />
        </div>
    );
};

export default HomePage;
