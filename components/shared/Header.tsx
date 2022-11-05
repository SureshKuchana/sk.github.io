import React from "react";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navLinks = [
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Blog",
      href: "/blogs"
    },
    {
      title: "Projects",
      href: "/projects"
    },
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Tech-Stacks",
      href: "/techStack"
    }
  ];
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Disclosure as='nav' className='bg-dark-800'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <a href='' className='flex-shrink-0 text-dark-600'>
                    Suresh Koochana
                  </a>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      <a
                        href='#about'
                        className='text-dark-300 hover:bg-dark-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        About
                      </a>
                      <a
                        href='#projects'
                        className='text-dark-300 hover:bg-dark-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Projects
                      </a>
                      <a
                        href='#blogs'
                        className='text-dark-300 hover:bg-dark-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Blogs
                      </a>
                      <a
                        href='#contact-me'
                        className='text-dark-300 hover:bg-dark-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className='md:-mr-2 lg:-mr-2 flex sm:-mr-40'> */}
                <div className='xl:-mr-2 2xl:-mr-2 md:-mr-2 lg:-mr-2 sm:mr-2 flex sm'>
                  <button
                    className='w-10 h-10 border-0 bg-white dark:text-white dark:bg-black outline-none mr-auto'
                    aria-label='Toggle Dark Mode'
                    type='button'
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>
                  </button>
                </div>
                <div className='-mr-2 flex sm:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-dark-400 hover:text-white hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {/* Current: "bg-dark-900 text-white", Default: "text-dark-300 hover:bg-dark-700 hover:text-white" */}
                <Disclosure.Button
                  as='a'
                  href='#s'
                  className='bg-dark-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#s'
                  className='text-dark-300 hover:bg-dark-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  About
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#s'
                  className='text-dark-300 hover:bg-dark-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#s'
                  className='text-dark-300 hover:bg-dark-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Blogs
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#s'
                  className='text-dark-300 hover:bg-dark-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Contact Me
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
