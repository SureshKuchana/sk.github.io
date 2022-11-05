import React from "react";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Blogs", href: "#" }
  ],
  social: [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/suresh-koochana-945950133/",
      icon: props => (
        <svg
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          {...props}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
          />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/SureshKuchana",
      icon: props => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      )
    }
  ]
};

export const Footer = () => {
  return (
    <footer
      className='bg-dark-800 absolute bottom-0 w-full'
      aria-labelledby='footer-heading'
    >
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {navigation.main.map(item => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='text-base text-dark-500 hover:text-dark-900'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-dark-400 hover:text-dark-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-dark-400'>
          Made With 💌 By Suresh Koochana
        </p>
        <p className='mt-8 text-center text-base text-dark-400'>
          © {new Date().getFullYear()} Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
