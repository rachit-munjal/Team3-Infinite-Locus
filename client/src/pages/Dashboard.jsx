import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const mockData = {
  Restaurant: ['Domino’s', 'Pizza Hut', 'Taco Bell', 'Subway'],
  Service: ['Laundry Shop', 'Plumber Shop', 'Salon'],
  Shop: ['SuperMart', 'Gadget shop', 'Clothing Shop', 'Nike Showroom'],
};

export default function Dashboard() {
  const user = {
    username: 'Saumya',
    profilePicture: 'https://i.pravatar.cc/150?img=2',
  };

  const [Category, setCategory] = useState('Restaurant');
  const [searchText, setSearchText] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState('');

  const handleCategoryChange = (category) => {
    setCategory(category);
    setSearchText('');
    setSelectedBusiness('');
  };

  const filteredOptions = mockData[Category].filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelect = (name) => {
    setSelectedBusiness(name);
    setSearchText(name);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} />

      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6">
        <div className="bg-white p-10 rounded-lg shadow-md max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Crowd Review</h1>
          <p className="text-gray-600 mb-6">
            Crowdsource your code reviews! <br />
            
          </p>
          <div className="flex justify-center gap-4 mb-4">
            {['Restaurant', 'Service', 'Shop'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded border ${
                  Category === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder={`Search ${Category.toLowerCase()}s...`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-2 border rounded"
            />
            {searchText && (
              <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow max-h-40 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                    >
                      {option}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              GIVE A REVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
