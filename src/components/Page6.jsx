import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Page6() {
    const [data, setData] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState(''); // Set the initial selected client ID
    const [selectedClient, setSelectedClient] = useState(null);
    const [debugInfo, setDebugInfo] = useState('');

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://zig-trip.com/ConfigAPIV2/GetClientconfig?Pin=ZIG19')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setDebugInfo('Error fetching data: ' + error.message);
            });
    }, []);

    // Define the client ID you want to display (e.g., '123' for a specific client)
    const targetClientId = '51'; // Replace with the desired client ID

    useEffect(() => {
        // Find the selected client by ID
        const selected = data.find((item) => item.Id == targetClientId);

        // Update the selected client state
        setSelectedClient(selected);
        setSelectedClientId(targetClientId);
    }, [data, targetClientId]);

    return (
        <div style={{ position: 'relative', backgroundColor: '#ffdd99' }}>
            <h1>DATA FILTER</h1>
            <h2>Client Details</h2>
            <h3 style={{ textAlign: 'center' }}>ID - 51</h3>

            {selectedClient && (
                <div className="outer">
                    <div className="inner">
                        {Object.keys(selectedClient).map((key) => (
                            <div key={key}>
                                <label>{key}: </label>
                                <input type="text" value={selectedClient[key]} readOnly />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {debugInfo && <p>{debugInfo}</p>}
           
           
            </div>
    );
}

export default Page6;