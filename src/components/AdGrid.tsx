import React from 'react';
import AdCard from './AdCard';
import type { Ad } from '../types';

const sampleAds: Ad[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro Max',
    price: 2199,
    description: 'Əla vəziyyətdə, tam işlək',
    category: 'Telefonlar',
    location: 'Bakı',
    images: ['https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400'],
    createdAt: new Date(),
    userId: 'user1'
  },
  {
    id: '2',
    title: 'Mercedes-Benz E 220',
    price: 45000,
    description: 'Ideal vəziyyətdə, az işlənmiş',
    category: 'Avtomobillər',
    location: 'Gəncə',
    images: ['https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=400'],
    createdAt: new Date(),
    userId: 'user2'
  },
  {
    id: '3',
    title: '3 otaqlı mənzil',
    price: 185000,
    description: 'Təmirli, mərkəzi istilik sistemi',
    category: 'Daşınmaz əmlak',
    location: 'Sumqayıt',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400'],
    createdAt: new Date(),
    userId: 'user3'
  },
];

export default function AdGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {sampleAds.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}