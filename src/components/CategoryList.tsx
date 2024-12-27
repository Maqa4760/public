import React from 'react';
import { Car, Home, Laptop, Smartphone, Sofa, ShoppingBag, Briefcase, Baby, Dog, Book } from 'lucide-react';
import CategoryCard from './categories/CategoryCard';

const categories = [
  { id: '1', name: 'Avtomobillər', icon: Car },
  { id: '2', name: 'Daşınmaz əmlak', icon: Home },
  { id: '3', name: 'Elektronika', icon: Laptop },
  { id: '4', name: 'Telefonlar', icon: Smartphone },
  { id: '5', name: 'Mebel', icon: Sofa },
  { id: '6', name: 'İş elanları', icon: Briefcase },
  { id: '7', name: 'Uşaq aləmi', icon: Baby },
  { id: '8', name: 'Heyvanlar', icon: Dog },
  { id: '9', name: 'Hobbi və əyləncə', icon: Book },
  { id: '10', name: 'Digər', icon: ShoppingBag },
];

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 p-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          icon={category.icon}
        />
      ))}
    </div>
  );
}