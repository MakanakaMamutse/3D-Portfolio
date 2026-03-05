import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactItems = [
  {
    label: 'Phone',
    lines: ['+27 64 227 5583', '+27 84 877 9564'],
    href: 'tel:+27642275583',
    Icon: PhoneIcon,
  },
  {
    label: 'Email',
    lines: ['makanakamamutse@gmail.com'],
    href: 'mailto:makanakamamutse@gmail.com',
    Icon: EmailIcon,
  },
  {
    label: 'GitHub',
    lines: ['MakanakaMamutse'],
    href: 'https://github.com/MakanakaMamutse',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    lines: ['in/makanaka'],
    href: 'https://linkedin.com/in/makanaka',
    Icon: LinkedInIcon,
  },
];

const Footer = () => {
  return (
    <div className='relative z-10 w-full py-20 px-4 sm:px-8'>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='max-w-5xl mx-auto'
      >
        <div
          className='rounded-3xl p-8 sm:p-12'
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h3 className='text-white text-center text-[26px] sm:text-[32px] font-bold mb-2'>
            Let&apos;s Connect
          </h3>
          <p className='text-secondary text-center text-[15px] mb-12'>
            Open to opportunities, collaborations &amp; conversations.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {contactItems.map(({ label, lines, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className='group flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 cursor-pointer'
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(145, 94, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(145, 94, 255, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-[#915EFF] transition-colors duration-300 group-hover:text-white'
                  style={{ background: 'rgba(145, 94, 255, 0.15)' }}
                >
                  <Icon />
                </div>
                <span className='text-secondary text-[11px] uppercase tracking-widest font-medium'>
                  {label}
                </span>
                <div className='flex flex-col items-center gap-1'>
                  {lines.map((line) => (
                    <span key={line} className='text-white text-[13px] font-medium text-center break-all leading-relaxed'>
                      {line}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div
            className='mt-10 pt-6 text-center'
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <p className='text-secondary text-[13px]'>
              &copy; {new Date().getFullYear()} Makanaka Mamutse. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
