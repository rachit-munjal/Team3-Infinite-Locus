import React, { useState, useRef, useEffect } from 'react';

export default function Navbar({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">CrowdReviewer</h1>

      {user ? (
        <div className="relative" ref={menuRef}>
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
            <span className="text-gray-800 font-medium">{user.username}</span>
            <img
              src={user.profilePicture || 'https://via.placeholder.com/40'}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border"
            />
          </div>

          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded border z-50 w-40">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => alert('Go to profile')}>
             Show Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => alert('Logging out')}>
                 Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
          <button className="px-4 py-2 bg-gray-100 border rounded">Sign Up</button>
        </div>
      )}
    </nav>
  );
}
