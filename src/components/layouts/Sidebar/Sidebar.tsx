import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={React.Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={React.Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-tranzinc-x-full"
                enterTo="tranzinc-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="tranzinc-x-0"
                leaveTo="-tranzinc-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-zinc-800">
                  <Transition.Child
                    as={React.Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <nav className="mt-5 px-2 space-y-1"></nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-background-contrast">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-1"></nav>
            </div>
          </div>
        </div>

        <div className="lg:pl-72 flex flex-col flex-1 h-screen">
          <div className="sticky top-0 filter-blur flex z-10 bg-black border-b border-neutral-800 h-12">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 lg:hidden inline-flex items-center justify-center rounded-md text-zinc-500 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="flex-1 bg-black">
            <div className="container max-w-3xl mx-auto p-4 lg:p-6">
              <h1 className="text-2xl font-semibold text-neutral-200">
                Dashboard
              </h1>
              <p className="text-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur quidem ipsa tempora officia quibusdam laborum,
                explicabo nostrum maxime quisquam accusamus porro minus fuga ex
                illo non doloribus harum! Quaerat, ipsam!
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
