import React from 'react';
import Button from '../ui/Button';

export default function NotificationSettings() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">E-poçt bildirişləri</h3>
        
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium">Yeni mesajlar</p>
            <p className="text-sm text-gray-500">Sizə yeni mesaj göndərildikdə bildiriş alın</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium">Elan yeniləmələri</p>
            <p className="text-sm text-gray-500">Elanlarınızın statusu dəyişdikdə bildiriş alın</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
      </div>
      
      <Button>Yadda saxla</Button>
    </div>
  );
}