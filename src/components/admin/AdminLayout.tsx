import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, LogOut } from 'lucide-react';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: FileText, label: 'Elanlar', path: '/admin/ads' },
    { icon: Users, label: 'İstifadəçilər', path: '/admin/users' },
    { icon: Settings, label: 'Tənzimləmələr', path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar menuItems={menuItems} />
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  );
}