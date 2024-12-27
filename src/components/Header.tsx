import React, { useState } from 'react';
import { PlusCircle, Menu } from 'lucide-react';
import Logo from './header/Logo';
import SearchBar from './header/SearchBar';
import Button from './ui/Button';
import AuthModal from './auth/AuthModal';
import LanguageSelector from './header/LanguageSelector';

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center gap-4">
              <Logo />
              <LanguageSelector />
            </div>
            <SearchBar />
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Daxil ol
              </Button>
              <Button className="hidden sm:flex">
                <PlusCircle className="h-5 w-5 mr-2" />
                <span>Yeni Elan</span>
              </Button>
              <Menu className="h-6 w-6 text-gray-600 cursor-pointer sm:hidden" />
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}