import React from 'react';
import { Heart } from 'lucide-react';
import type { Ad } from '../types';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <img
          src={ad.images[0]}
          alt={ad.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{ad.title}</h3>
        <p className="text-blue-600 font-bold">{ad.price} ₼</p>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>{ad.location}</span>
          <span>{new Date(ad.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}