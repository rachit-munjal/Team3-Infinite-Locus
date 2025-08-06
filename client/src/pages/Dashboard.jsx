import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Required for navigation
import Navbar from '../components/Navbar';

const mockData = {
  Restaurant: ['Domino’s', 'Pizza Hut', 'Taco Bell', 'Subway'],
  Service: ['Laundry Express', 'Quick Fix Plumbing', 'Happy Hair Salon'],
  Shop: ['SuperMart', 'Gadget Zone', 'Clothing Hub'],
};

export default function Dashboard() {
  const user = {
    username: 'Saumya',
    profilePicture: 'https://i.pravatar.cc/150?img=2',
  };

  const [selectedCategory, setSelectedCategory] = useState('Restaurant');
  const [searchText, setSearchText] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const navigate = useNavigate(); 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchText('');
    setSelectedBusiness('');
  };

  const filteredOptions = mockData[selectedCategory].filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelect = (name) => {
    setSelectedBusiness(name);
    setSearchText(name);
  };

  const handleGiveReview = () => {
    if (!selectedCategory || !selectedBusiness) {
      alert('Please select a category and a business before continuing.');
      return;
    }
    const formattedBusiness = selectedBusiness.replace(/\s+/g, '-');

    navigate(`/review/${selectedCategory.toLowerCase()}/${formattedBusiness.toLowerCase()}`);
  };

  return (
    
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} />

      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6">
        <div className="bg-white p-10 rounded-lg shadow-md max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Crowd Review</h1>
          <p className="text-gray-600 mb-6">
            Crowdsource your code reviews! <br />
            Help other people review their code! Read more code!
          </p>
          <div className="flex justify-center gap-4 mb-4">
            {['Restaurant', 'Service', 'Shop'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded border ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Dropdown */}
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder={`Search ${selectedCategory.toLowerCase()}s...`}
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

            <button
    onClick={handleGiveReview}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    GIVE A REVIEW
  </button>
        </div>
      </div>
    </div>
  );
}
