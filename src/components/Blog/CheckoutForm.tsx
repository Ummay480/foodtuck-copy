"use client"

import { useState } from 'react';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the form data, e.g., send it to an API
    console.log({ name, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border rounded"
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
