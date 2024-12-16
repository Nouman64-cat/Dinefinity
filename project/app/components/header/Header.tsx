"use client";
import { Restaurant } from "@/app/interfaces/restaurants";
import React, { useState } from "react";
import RestaurantInfoCard from "../restaurant-card/RestaurantInfoCard";
import { FaWandMagicSparkles } from "react-icons/fa6";

interface HeaderProps {
  restaurants: Restaurant[];
}

const Header: React.FC<HeaderProps> = ({ restaurants }) => {
  const [showModal, setShowModal] = useState(false);
  const [randomRestaurant, setRandomRestaurant] = useState<Restaurant | null>(null);

  // Function to pick a random restaurant
  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    setRandomRestaurant(restaurants[randomIndex]);
    setShowModal(true);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Find Your Perfect Restaurant</h1>
        <button
          onClick={handleSurpriseMe}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 hover:opacity-90 rounded-lg shadow-lg text-lg font-semibold"
        >
          <FaWandMagicSparkles size={20} />
          Surprise Me
        </button>
      </div>

      {/* Modal */}
      {showModal && randomRestaurant && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Restaurant Recommendation</h2>
            <RestaurantInfoCard restaurant={randomRestaurant} />
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleSurpriseMe}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Try Again
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
