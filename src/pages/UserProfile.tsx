import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { Settings, Package, CreditCard, Bell } from 'lucide-react';
import Header from '../components/Header';
import UserAds from '../components/profile/UserAds';
import ProfileSettings from '../components/profile/ProfileSettings';
import VipSettings from '../components/profile/VipSettings';
import NotificationSettings from '../components/profile/NotificationSettings';

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          <Tabs defaultValue="ads" className="w-full">
            <TabsList className="border-b">
              <TabsTrigger value="ads" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Elanlarım
              </TabsTrigger>
              <TabsTrigger value="vip" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                VIP Xidmətlər
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Tənzimləmələr
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Bildirişlər
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ads">
              <UserAds />
            </TabsContent>
            
            <TabsContent value="vip">
              <VipSettings />
            </TabsContent>
            
            <TabsContent value="settings">
              <ProfileSettings />
            </TabsContent>
            
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}