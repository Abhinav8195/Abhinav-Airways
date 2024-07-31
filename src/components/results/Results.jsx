import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getAccessToken from './getAccessToken'; // Import the token function
import './Results.css'; // Import your CSS file for styling

const Results = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const accessToken = await getAccessToken(); // Get the access token
        
        // Get inputs from local storage
        const origin = localStorage.getItem('origin');
        const maxPrice = 200; // Set your max price here

        if (!origin) {
          throw new Error('Origin is required');
        }

        // Prepare the API URL with the required parameters
        const url = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}&maxPrice=${maxPrice}`;

        // Make the API request
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`, // Use the access token
          }
        });

        console.log('API Response:', response.data);
        
        // Update state with fetched flight data
        setFlights(response.data.data);
      } catch (error) {
        console.error("Error fetching flights:", error.response ? error.response.data : error.message);
        setError(error.response ? error.response.data : { message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching flights: {error.message}</div>;
  }

  return (
    <div className="results container section">
      <h2>Available Flights</h2>
      <div className="flights-list">
        {flights && flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="flight-card">
              <div className="flight-header">
                <h3>{flight.destination}</h3>
                <p>Price: <span className="price">{flight.price.total} EUR</span></p>
              </div>
              <div className="flight-details">
                <p><strong>From:</strong> {flight.origin}</p>
                <p><strong>Departure Date:</strong> {flight.departureDate}</p>
                <p><strong>Return Date:</strong> {flight.returnDate}</p>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          ))
        ) : (
          <div className="no-flights">No flights available for the selected criteria.</div>
        )}
      </div>
    </div>
  );
}

export default Results;
