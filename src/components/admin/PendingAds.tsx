import React from 'react';
import { Check, X, Eye } from 'lucide-react';
import Button from '../ui/Button';
import type { Ad } from '../../types';

const pendingAds: Ad[] = [
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
    status: 'pending'
  },
  {
    id: '2',
    title: 'Mercedes-Benz E 220',
    price: 45000,
    description: 'Ideal vəziyyətdə, az işlənmiş',
    category: 'Avtomobillər',
    location: 'Gəncə',
    images: ['https://images.unsplash.com/photo-1617531653332-bd46c24f2068'],
    createdAt: new Date(),
    userId: 'user2',
    status: 'pending'
  }
];

export default function PendingAds() {
  const handleApprove = (id: string) => {
    // TODO: Implement approval logic
    console.log('Approved:', id);
  };

  const handleReject = (id: string) => {
    // TODO: Implement rejection logic
    console.log('Rejected:', id);
  };

  const handleView = (id: string) => {
    // TODO: Implement view details logic
    console.log('Viewing:', id);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Təsdiq Gözləyən Elanlar</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            {pendingAds.length} Gözləyən
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Şəkil</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Məlumat</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qiymət</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kateqoriya</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarix</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingAds.map((ad) => (
              <tr key={ad.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={ad.images[0]} alt={ad.title} className="h-16 w-16 object-cover rounded" />
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{ad.title}</div>
                  <div className="text-sm text-gray-500">{ad.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-primary-600">{ad.price} ₼</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                    {ad.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(ad.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(ad.id)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleApprove(ad.id)}
                      className="text-green-600 hover:text-green-700"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReject(ad.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}