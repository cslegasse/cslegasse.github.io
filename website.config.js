export const personalInfo = {
  name: 'Legasse Remon',
  profilePicture: '/profile.jpg', //optional
  role: 'Research Assistant',
  university: 'University of Florida',
  universityWebsite: 'https://www.ufl.edu/',
  socialMedia: [
    { name: 'Email', url: 'mailto:legasseremon@ufl.edu' },
    {
      name: 'GitHub',
      url: 'https://github.com/legasseremon/',
    },
    { name: 'LinkedIn', url: 'https://linkedin.com/legasse-remon' },

  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'HCI researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'Projects', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  // SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
