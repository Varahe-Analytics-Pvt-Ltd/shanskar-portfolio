# Shanskar Bansal - AI Engineer Portfolio

A premium, cinematic personal portfolio website showcasing AI engineering expertise, political sector technology innovation, and full-stack development projects.

## 🎯 Features

- **Cinematic Design**: Minimalist elegance with smooth scroll-based animations
- **3D Background**: Interactive Three.js particle system
- **Premium Typography**: Neue Haas Grotesk Display + Inter font pairing
- **Smooth Scroll**: Lenis integration for cinematic scroll behavior
- **GSAP Animations**: Scroll-triggered, staggered animations throughout
- **GitHub Integration**: Live fetching of public repositories
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Contact Form**: Functional form with validation
- **Social Links**: GitHub, LinkedIn, and email integration
- **Performance Optimized**: Fast loading, smooth 60fps animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Type check
pnpm check

# Build
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   ├── App.tsx             # App wrapper
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
└── index.html              # HTML template
```

## 🎨 Design Philosophy

**Minimalist Elegance with Cinematic Motion**

The portfolio emphasizes:
- Generous whitespace for premium feel
- Smooth, purposeful animations
- Clear visual hierarchy
- Story-driven content flow
- Premium typography system

## 🔧 Customization

### Update Content

1. **Hero Section**: Edit `client/src/components/HeroSectionEnhanced.tsx`
2. **About Section**: Edit `client/src/components/AboutSection.tsx`
3. **Projects**: Edit `client/src/components/ProjectsSection.tsx`
4. **Expertise**: Edit `client/src/components/ExpertiseSection.tsx`
5. **Contact**: Edit `client/src/components/ContactSection.tsx`

### Update Styling

Edit `client/src/index.css` to customize:
- Color palette (OKLCH format)
- Typography system
- Spacing and sizing
- Animation timings

### Update GitHub Username

Edit `client/src/components/GitHubShowcase.tsx`:
```typescript
const { repos, loading, error } = useGitHubProjects('your-username');
```

## 🚢 Deployment

### Manus (Recommended)

1. Click **Publish** in the Management UI
2. Configure your domain
3. Deploy with one click

### Vercel

```bash
vercel --prod
```

### Netlify

```bash
netlify deploy --prod --dir=dist
```

### Self-Hosted

```bash
pnpm build
NODE_ENV=production node dist/index.js
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📊 Performance

- **Lighthouse Score**: 90+
- **Core Web Vitals**: All green
- **Bundle Size**: ~150KB gzipped
- **Animation Performance**: 60fps on modern devices

## 🛠️ Tech Stack

- **React 19**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool & dev server
- **Tailwind CSS 4**: Utility-first styling
- **Three.js**: 3D graphics
- **GSAP**: Animation library
- **Lenis**: Smooth scroll
- **Wouter**: Client-side routing

## 📝 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Mobile latest

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators on interactive elements

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large screens: 1400px and up

## 🔐 Security

- No sensitive data in code
- Environment variables for secrets
- HTTPS enforced on deployment
- Content Security Policy ready
- XSS protection via React

## 📈 Analytics

The portfolio includes:
- Umami analytics integration
- Page view tracking
- User engagement metrics
- Performance monitoring

Configure in `client/index.html`:
```html
<script defer src="YOUR_ANALYTICS_URL" data-website-id="YOUR_ID"></script>
```

## 🐛 Troubleshooting

### Animations Not Working
- Check browser console for errors
- Ensure JavaScript is enabled
- Try clearing browser cache
- Check for CSS conflicts

### GitHub Projects Not Loading
- Verify GitHub username is correct
- Check browser console for API errors
- GitHub API has rate limits (60/hour unauthenticated)

### Styling Issues
- Clear browser cache
- Rebuild with `pnpm build`
- Check Tailwind configuration
- Verify custom fonts are loading

## 📚 Documentation

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detailed deployment instructions
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Documentation](https://gsap.com)

## 🤝 Contributing

This is a personal portfolio. For improvements or bug reports, please create an issue or pull request.

## 📄 License

This portfolio is personal and proprietary. All code and content are owned by Shanskar Bansal.

## 👤 About

**Shanskar Bansal** - AI Engineer & Political Sector Technologist

- 🔗 [GitHub](https://github.com/shanskarBansal)
- 💼 [LinkedIn](https://linkedin.com/in/shanskarbansal)
- 📧 [Email](mailto:shanskarbansal@gmail.com)

---

**Built with ❤️ using React, Three.js, GSAP, and Tailwind CSS**

*Deployed on Manus - The AI-powered web development platform*
