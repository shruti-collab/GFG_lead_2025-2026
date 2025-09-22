# GFG Campus Body — GCET Team Website

A modern, responsive Next.js website showcasing the GFG Campus Body team at Government College of Engineering and Technology (GCET).

## Features

- ✨ Modern design with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🎨 shadcn/ui components
- ⚡ Next.js 14 with App Router
- 🔍 TypeScript support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

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
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── TeamCard.tsx     # Individual team member card
│   ├── TeamGrid.tsx     # Team members grid
│   └── PersonDialog.tsx # Member detail modal
├── data/
│   └── team.ts          # Team members data
├── lib/
│   └── utils.ts         # Utility functions
└── public/
    └── team/            # Team member photos
```

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