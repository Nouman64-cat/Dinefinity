"use client";
import React, { useEffect, useState } from "react";
import { Restaurant } from "./interfaces/restaurants";
import RestaurantInfoCard from "./components/restaurant-card/RestaurantInfoCard";
import Header from "./components/header/Header";


const Page = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]); // State for storing fetched restaurants
  const [error, setError] = useState<string | null>(null); // State for handling errors

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/restaurantsData.json"); // Path to your JSON file in public folder
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants data");
        }
        const data = await response.json();
        setRestaurants(data); // Set the fetched data to state
      } catch (err: any) {
        setError(err.message); // Handle errors
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="p-20">
      <Header restaurants={restaurants}/>
      <div className="mt-10">
        <h2 className="text-3xl font-bold ">Restaurants</h2>
        {error ? (
          <p className="text-red-500 mt-4">Error: {error}</p>
        ) : restaurants.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {restaurants.map((restaurant) => (
              <RestaurantInfoCard  key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mt-4">Loading restaurants...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
