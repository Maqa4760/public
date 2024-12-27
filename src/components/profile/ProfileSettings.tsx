import React from 'react';
import Button from '../ui/Button';

export default function ProfileSettings() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ad Soyad
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          E-poçt
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefon
        </label>
        <input
          type="tel"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Şəhər
        </label>
        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400">
          <option>Bakı</option>
          <option>Gəncə</option>
          <option>Sumqayıt</option>
        </select>
      </div>
      
      <Button>Yadda saxla</Button>
    </div>
  );
}