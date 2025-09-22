# GFG Campus Body — GCET Team Website

A modern, responsive Next.js website showcasing the GFG Campus Body team at Government College of Engineering and Technology (GCET).

## Features

- ✨ Modern design with Tailwind CSS
- � Dark/Light mode toggle with next-themes
- �🎭 Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🎨 shadcn/ui components
- ⚡ Next.js 14 with App Router
- 🔍 TypeScript support
- 🎯 Team member profiles with detailed dialogs
- 🚀 Performance optimized

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Theme**: next-themes for dark/light mode

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

2. **Add team photos**:
   - Place team member photos in `public/team/` directory
   - Name them according to the IDs in `data/team.ts`:
     - `deepu.jpg`, `artiya.jpg`, `vithhal.jpg`, `shruti.jpg`, etc.
   - Use standard formats: `.jpg`, `.png`, or `.webp`

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Home page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header with theme toggle
│   ├── Footer.tsx       # Site footer
│   ├── TeamCard.tsx     # Individual team member card
│   ├── TeamGrid.tsx     # Team members grid
│   ├── PersonDialog.tsx # Member detail modal
│   ├── mode-toggle.tsx  # Theme toggle component
│   └── theme-provider.tsx # Theme provider wrapper
├── data/
│   └── team.ts          # Team members data
├── lib/
│   └── utils.ts         # Utility functions
└── public/
    └── team/            # Team member photos & GFG logo
```

## Features Implemented

### Dark/Light Mode Toggle
- Seamless theme switching using next-themes
- Persistent theme selection
- System theme detection
- Dark mode optimized styling for all components

### Team Member Cards
- Interactive hover effects
- Detailed member dialogs
- Social media links
- Professional styling with glassmorphism effects

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Flexible grid layouts
- Touch-friendly interactions

## Customization

### Adding Team Members

Edit `data/team.ts` to add or modify team members:

```typescript
export const TEAM: Member[] = [
  {
    id: 'unique-id',
    name: 'Member Name',
    role: 'Position',
    bio: 'Brief description...',
    img: '/team/photo.jpg',
    socials: { 
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://github.com/username'
    }
  },
  // ... more members
];
```

### Styling

- **Colors**: Modify GFG brand colors in `tailwind.config.js`
- **Components**: Edit component files in `components/`
- **Global styles**: Update `app/globals.css`
- **Theme**: Customize dark/light mode colors

### Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is created for the GFG Campus Body at GCET. Feel free to use it as a template for your own campus organization websites.

---

Made with ❤️ by the GFG Campus Body GCET Team
