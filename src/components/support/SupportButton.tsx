import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Button from '../ui/Button';

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Dəstək</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <textarea
              placeholder="Mesajınızı yazın..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 min-h-[120px]"
            />
            <Button className="w-full mt-4">Göndər</Button>
          </div>
        </div>
      )}
    </>
  );
}