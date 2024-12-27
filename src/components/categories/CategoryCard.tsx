import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
}

export default function CategoryCard({ name, icon: Icon }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-primary-50 group">
      <Icon className="h-8 w-8 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-sm text-center text-gray-700">{name}</span>
    </div>
  );
}