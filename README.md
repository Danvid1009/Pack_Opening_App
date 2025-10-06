# Pack Opening App - Static Frontend MVP

A static, client-only prototype of a card pack opening application built with React, TypeScript, and TailwindCSS.

## Features

- **Home Page**: Three carousels (Just Packed, Recommended, Categories)
- **All Packs**: Grid view of all available packs
- **Games**: Interactive game tiles (static for now)
- **History**: Mock pack opening history with card details
- **Account**: User profile and settings management
- **Pack Opening**: Modal with video player for pack opening animations

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- React Router for navigation
- Custom video player component

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to GitHub Pages or any static hosting service.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Bottom navigation
│   ├── PackCard.tsx    # Pack display card
│   ├── PackInfoModal.tsx # Pack details modal
│   └── VideoPlayer.tsx # Video player component
├── pages/              # Page components
│   ├── Home/           # Home page with carousels
│   ├── AllPacks/       # All packs grid view
│   ├── Games/          # Games page
│   ├── History/        # Pack opening history
│   └── Account/        # User account page
├── styles/
│   └── global.css      # Global styles and TailwindCSS
└── assets/             # Static assets
    ├── logo.svg        # App logo
    ├── pack-opening.mp4 # Pack opening animation (placeholder)
    └── placeholder-pack.png # Pack image placeholder
```

## Design System

- **Colors**: Black background with pastel accent colors
- **Typography**: Clean, modern fonts
- **Layout**: Mobile-first responsive design
- **Components**: Consistent card-based design with hover effects

## Mock Data

The app uses static mock data for demonstration purposes:
- Sample packs with different rarities
- Mock pack opening history
- User profile information
- Game tiles and categories

## Future Enhancements

- Backend API integration
- Real pack opening animations
- User authentication
- Payment processing
- Real-time pack opening events
- Social features and sharing

## Deployment

This app is designed to be deployed as a static site on GitHub Pages or any static hosting service. The Vite configuration includes the correct base path for GitHub Pages deployment.
