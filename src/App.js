import React, { useState } from 'react';

const LorryTransportApp = () => {
  const [transports, setTransports] = useState([]);
  const [lorryNumber, setLorryNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [cargo, setCargo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddTransport = async () => {
    if (lorryNumber && destination && cargo && phoneNumber) {
      const newTransport = {
        lorryNumber,
        destination,
        cargo,
        phoneNumber,
      };

      try {
        await sendSMS(phoneNumber);
        setTransports([...transports, newTransport]);
        setLorryNumber('');
        setDestination('');
        setCargo('');
        setPhoneNumber('');
      } catch (error) {
        console.error('Error sending SMS', error);
      }
    }
  };

  const sendSMS = async (phoneNumber) => {
    const response = await fetch('/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });

    if (!response.ok) {
      throw new Error('Failed to send SMS');
    }
  };

  return (
    <div className='container'>
      <h1>Lorry Transport Application</h1>
      
      <div>
        <h2>Add Transport</h2>
        <input
          type="text"
          placeholder="Lorry Number"
          value={lorryNumber}
          onChange={(e) => setLorryNumber(e.target.value)}
        />
        {/* Other input fields */}
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button className='btn' onClick={handleAddTransport}>Add Transport</button>

      <div>
        <h2>Transport List</h2>
        <ul>
          {transports.map((transport, index) => (
            <li key={index}>
              {/* Display transport details */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LorryTransportApp;
