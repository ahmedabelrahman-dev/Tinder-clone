import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';

function HomePage() {
  const { logout } = useAuthStore();

  return (
    <div>
      HomePage
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
      <Link to="/profile">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Go to Profile
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
