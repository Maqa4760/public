import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'az', label: 'AZE' },
  { code: 'ru', label: 'RUS' },
  { code: 'en', label: 'ENG' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('az');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
      >
        <Globe className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium">{languages.find(l => l.code === currentLang)?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang.code);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-primary-50 hover:text-primary-600"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}