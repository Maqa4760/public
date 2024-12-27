import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-8 w-8 text-primary-600" />
      <span className="text-2xl font-bold text-primary-600">ModMax</span>
    </div>
  );
}