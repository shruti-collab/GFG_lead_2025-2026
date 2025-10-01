export type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  img?: string; // public/ folder path
  socials?: { linkedin?: string; github?: string; insta?: string };
};

export const TEAM: Member[] = [
  // Chairpersons
  {
    id: 'dhruv',
    name: 'Dhruv Kumar',
    role: 'Chairperson',
    bio: 'Chairperson — leads the chapter, coordinates vision and strategy.',
    img: '/team/dhruv.png',
    socials: { linkedin: 'https://www.linkedin.com/in/dhruv-kumar-b91594259/'}
  },
  {
    id: 'antra',
    name: 'Antra Singh',
    role: 'Vice Chairperson',
    bio: 'Vice Chairperson — assists with operations and community outreach.',
    img: '/team/antra.png',
    socials: { linkedin: 'https://www.linkedin.com/in/antra-singh-175978332/'}
  },

  // Department Leads
  { 
    id: 'vithhal', 
    name: 'Vithhal Dwivedi', 
    role: 'Campus Mantri', 
    bio: 'Campus Mantri — guides and mentors the team activities.', 
    img: '/team/vithhal.png',
    socials: { linkedin: 'https://www.linkedin.com/in/vitthal-dwivedi-81596631b/' }
  },
  { 
    id: 'shruti', 
    name: 'Shruti Kumari', 
    role: 'Technical Lead', 
    bio: 'Technical Lead — coordinates workshops and technical content.', 
    img: '/team/shruti.png',
    socials: { linkedin: 'https://www.linkedin.com/in/shruti-kumari-a35b302b8/' }
  },
  { 
    id: 'aayan', 
    name: 'Ayaan Ansari', 
    role: 'Creative Lead', 
    bio: 'Creative Lead — manages visual design and creative direction.', 
    img: '/team/aayan.png',
    socials: { linkedin: 'https://www.linkedin.com/in/ayaan-ansari-712706339' }
  },
  { 
    id: 'manvendra', 
    name: 'Manvendra Pratap Singh', 
    role: 'Event & Organizations Lead', 
    bio: 'Event & Organizations Lead — handles events and organizational activities.', 
    img: '/team/manvendra.png',
    socials: { linkedin: '#' }
  },
  { 
    id: 'mohd-ali', 
    name: 'Mohd Ali Slim Khan', 
    role: 'Editorial / Blog Lead', 
    bio: 'Editorial / Blog Lead — manages editorial content and blog publications.', 
    img: '/team/ali.png',
    socials: { linkedin: '#' }
  },
  { 
    id: 'vaibhav', 
    name: 'Vaibhav Pandey', 
    role: 'Graphics Design Lead', 
    bio: 'Graphics Design Lead — creates visual content and graphics.', 
    img: '/team/vaibhav.png',
    socials: { linkedin: 'https://www.linkedin.com/in/vaibhav-pandey-6b800b298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
  },
  { 
    id: 'ayushman', 
    name: 'Ayushman Pandya', 
    role: 'Graphics Design Lead', 
    bio: 'Graphics Design Lead — specializes in creative visual solutions.', 
    img: '/team/ayushman.png',
    socials: { linkedin: '#' }
  },
  { 
    id: 'adarsh', 
    name: 'Adarsh Sharma', 
    role: 'Social Media & Promotion Lead', 
    bio: 'Social Media & Promotion Lead — manages social media strategy and promotional campaigns.', 
    img: '/team/adarsh.png',
    socials: { linkedin: 'https://www.linkedin.com/in/adarsh-sharma-5a8a042a7?trk=contact-info' }
  },
  { 
    id: 'nitin', 
    name: 'Nitin Raj Singh', 
    role: 'PR & Outreach Lead', 
    bio: 'PR & Outreach Lead — handles public relations and community outreach.', 
    img: '/team/nitin.png',
    socials: { linkedin: '#' }
  }
];
