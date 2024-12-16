"use client";
import { Restaurant } from "@/app/interfaces/restaurants";
import React from "react";


interface RestaurantInfoCardProps {
  restaurant: Restaurant;
}

const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = ({ restaurant }) => {
  return (
    <li className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-2xl text-white">{restaurant.name}</h3>
      <p className="text-gray-400">{restaurant.address}</p>
      <a
        href={restaurant.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View on Google Maps
      </a>
      <p className="text-gray-300">Contact: {restaurant.contact || "N/A"}</p>
      <p className="text-yellow-300">Rating: {restaurant.rating || "N/A"}</p>
    </li>
  );
};

export default RestaurantInfoCard;
