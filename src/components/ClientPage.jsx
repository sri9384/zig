import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ClientPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items to display per page
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

  // Define the client ID you want to display (e.g., '68' for a specific client)
  const targetClientId = '68'; // Replace with the desired client ID

  useEffect(() => {
    // Find the selected client by ID
    const selected = data.find((item) => item.Id == targetClientId);

    // Update the selected client state
    setSelectedClient(selected);
  }, [data, targetClientId]);

  // Calculate the total number of pages based on the number of items
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle next page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the index range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter the data to display only items for the current page
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div style={{ position: 'relative', backgroundColor: '#b3d9ff' }}>
      <h1>DATA FILTER</h1>
      <h2>Client Details</h2>
      <h3 style={{ textAlign: 'center' }}>ID - {targetClientId}</h3>

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
    
  
)};

export default ClientPage;
