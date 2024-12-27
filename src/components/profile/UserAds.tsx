import React from 'react';
import { MoreVertical, Trash, Star } from 'lucide-react';
import Button from '../ui/Button';
import type { Ad } from '../../types';

const userAds: Ad[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro Max',
    price: 2199,
    description: 'Əla vəziyyətdə, tam işlək',
    category: 'Telefonlar',
    location: 'Bakı',
    images: ['https://images.unsplash.com/photo-1632661674596-df8be070a5c5'],
    createdAt: new Date(),
    userId: 'user1',
    isVip: false
  }
];

export default function UserAds() {
  return (
    <div className="space-y-4">
      {userAds.map((ad) => (
        <div key={ad.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
          <div className="flex items-center gap-4">
            <img src={ad.images[0]} alt={ad.title} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="font-medium">{ad.title}</h3>
              <p className="text-primary-600 font-bold">{ad.price} ₼</p>
              <p className="text-sm text-gray-500">{ad.location}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {!ad.isVip && (
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                VIP et
              </Button>
            )}
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}