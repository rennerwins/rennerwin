import * as React from 'react';
import { BottomNavbar } from '../BottomNavbar/BottomNavbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="relative h-screen overflow-y-auto bg-neutral-900">
      <div className="container relative max-w-2xl px-4 pt-4 pb-24 mx-auto ">
        {children}
      </div>

      <BottomNavbar />
    </main>
  );
};
