import React from 'react';
import { LucideIcon } from 'lucide-react';
import Logo from '../header/Logo';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export default function AdminSidebar({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-600"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}