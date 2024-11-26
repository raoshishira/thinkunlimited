import { getPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
 
    {
      text: 'Home',
      href: getPermalink('/#')
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),  
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing')
    },
        
    {
      text: 'Contact Us',
      href: getPermalink('/contact')
    },
  
  ],
 
};

export const footerData = {
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/realthinkunlimited/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/realthinkunlimited' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https:thinkunlimited.in/"> Think Unlimited</a> · All rights reserved.
  `,
};
