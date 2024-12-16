// src/components/RequestForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RequestForm = () => {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [response, setResponse] = useState(null);
    const [requestBody, setRequestBody]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config={method,url};
            if(method !== 'GET'){
                config.data=JSON.parse(requestBody);
            }
            const res = await axios(config);
            setResponse(res.data);
        } catch (error) {
            setResponse(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder="Enter URL" 
                    required 
                />
                <select value={method} onChange={(e) => setMethod(e.target.value)}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
                <button type="submit">Send Request</button>
                <br></br>
                {method !== 'GET' && (
                <textarea
                value={requestBody}
                onChange={(e)=> setRequestBody(e.target.value)}
                placeholder='Enter request body(JSON)'
                /> 
                )}
            </form>
            {response && (
                <div>
                    <h3>
                        Response:
                    </h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
                )}
        </div>
    );
};

export default RequestForm;

