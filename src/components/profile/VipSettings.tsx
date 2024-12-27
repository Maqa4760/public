import React from 'react';
import { Star, Check } from 'lucide-react';
import Button from '../ui/Button';

const vipPackages = [
  {
    id: 'basic',
    name: 'Basic VIP',
    price: 10,
    duration: '7 gün',
    features: [
      'Elanın ön sırada göstərilməsi',
      'Xüsusi VIP nişanı',
      'Daha çox baxış'
    ]
  },
  {
    id: 'premium',
    name: 'Premium VIP',
    price: 25,
    duration: '30 gün',
    features: [
      'Elanın ön sırada göstərilməsi',
      'Xüsusi VIP nişanı',
      'Daha çox baxış',
      'Statistika və analitika',
      'Prioritet dəstək'
    ]
  }
];

export default function VipSettings() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {vipPackages.map((pkg) => (
        <div key={pkg.id} className="border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <h3 className="text-lg font-semibold">{pkg.name}</h3>
          </div>
          
          <p className="text-2xl font-bold">{pkg.price} ₼ <span className="text-sm font-normal text-gray-500">/ {pkg.duration}</span></p>
          
          <ul className="space-y-2">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button className="w-full">Paketi seç</Button>
        </div>
      ))}
    </div>
  );
}