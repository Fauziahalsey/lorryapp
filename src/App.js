import React, { useState } from 'react';

const LorryTransportApp = () => {
  const [transports, setTransports] = useState([]);
  const [lorryNumber, setLorryNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [cargo, setCargo] = useState('');

  const handleAddTransport = () => {
    if (lorryNumber && destination && cargo) {
      const newTransport = {
        lorryNumber,
        destination,
        cargo,
      };
      setTransports([...transports, newTransport]);
      setLorryNumber('');
      setDestination('');
      setCargo('');
    }
  };

  return (
    <div>
      <h1>Lorry Transport Application</h1>
      
      <div>
        <h2>Add Transport</h2>
        <input
          type="text"
          placeholder="Lorry Number"
          value={lorryNumber}
          onChange={(e) => setLorryNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>
      <button className='btn' onClick={handleAddTransport}>Add Transport</button>

      <div>
        <h2>Transport List</h2>
        <ul>
          {transports.map((transport, index) => (
            <li key={index}>
              <strong>Lorry Number:</strong> {transport.lorryNumber}<br />
              <strong>Destination:</strong> {transport.destination}<br />
              <strong>Cargo:</strong> {transport.cargo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LorryTransportApp;
