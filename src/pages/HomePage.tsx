import React from 'react';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import AdGrid from '../components/AdGrid';
import SupportButton from '../components/support/SupportButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto">
        <CategoryList />
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold mb-4">Son Elanlar</h2>
          <AdGrid />
        </div>
      </main>
      <SupportButton />
    </div>
  );
}