import React from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className} data-active-tab={activeTab}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div className={`flex border-b ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = '', ...props }: TabsTriggerProps & { activeTab?: string; setActiveTab?: (value: string) => void }) {
  const isActive = props.activeTab === value;
  
  return (
    <button
      className={`px-4 py-2 font-medium text-sm ${isActive ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'} ${className}`}
      onClick={() => props.setActiveTab?.(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: TabsContentProps & { activeTab?: string }) {
  const isActive = value === arguments[0].activeTab;
  
  if (!isActive) return null;
  
  return <div className="p-6">{children}</div>;
}