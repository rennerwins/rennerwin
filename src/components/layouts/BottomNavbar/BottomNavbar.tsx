import {
  AtSymbolIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const iconClass =
  'w-6 h-6 lg:w-8 lg:-h-8 text-neutral-500 hover:cursor-pointer hover:text-neutral-400';

interface NavigationItem {
  label: string;
  url: string;
  icon: any;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', url: '/', icon: HomeIcon },
  { label: 'Blog', url: '/blog', icon: NewspaperIcon },
  { label: 'About', url: '/about', icon: UserIcon },
  { label: 'Contact', url: '/contact', icon: AtSymbolIcon },
];

export const BottomNavbar = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 w-64 mx-auto border shadow-lg bg-neutral-700 border-neutral-800 rounded-xl bottom-6 backdrop-filter backdrop-blur bg-opacity-10">
      <nav className="flex justify-between">
        {navigationItems.map((item) => {
          const Comp = item.icon;
          return (
            <Link key={item.label} href={item.url}>
              <a className="relative flex flex-col items-center p-4">
                <Comp
                  className={twMerge(
                    iconClass,
                    router.pathname === item.url &&
                      'text-neutral-100 active:text-neutral-100 focus:text-neutral-100 focus-visible:text-neutral-100 hover:text-neutral-100'
                  )}
                />
                {router.pathname === item.url && (
                  <div className="absolute w-1 h-1 rounded-full bottom-2 bg-neutral-100" />
                )}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
