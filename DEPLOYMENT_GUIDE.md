# Shanskar Bansal Portfolio - Deployment Guide

## Overview

This is a premium, cinematic personal portfolio website built with React, Three.js, GSAP, and Tailwind CSS. The site showcases AI engineering expertise, political sector technology innovation, and full-stack development projects.

## Technology Stack

**Frontend:**
- React 19 with TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS 4 for styling
- Three.js for 3D background animations
- GSAP for scroll-based cinematic animations
- Lenis for smooth scroll behavior

**Architecture:**
- Component-based design with reusable sections
- Custom hooks for GitHub API integration
- Scroll-triggered animations using GSAP ScrollTrigger
- Responsive design (mobile-first approach)

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── BackgroundScene.tsx          # Three.js animated background
│   │   ├── HeroSectionEnhanced.tsx      # Premium hero section
│   │   ├── AboutSection.tsx             # Story-driven about section
│   │   ├── ProjectsSection.tsx          # Featured projects showcase
│   │   ├── GitHubShowcase.tsx           # Live GitHub projects
│   │   ├── ExpertiseSection.tsx         # AI expertise overview
│   │   ├── ContactSection.tsx           # Contact form & links
│   │   └── Footer.tsx                   # Premium footer
│   ├── hooks/
│   │   └── useGitHubProjects.ts         # GitHub API integration
│   ├── lib/
│   │   └── animations.ts                # Reusable animation utilities
│   ├── pages/
│   │   └── Home.tsx                     # Main page composition
│   ├── App.tsx                          # App wrapper with Lenis setup
│   ├── main.tsx                         # React entry point
│   └── index.css                        # Global styles & design tokens
├── public/                              # Static assets
└── index.html                           # HTML template
```

## Design Philosophy

**Minimalist Elegance with Cinematic Motion**

The portfolio follows a premium design approach emphasizing:

- **Generous Whitespace**: Breathing room between sections for premium feel
- **Cinematic Pacing**: Scroll-triggered animations that unfold like film scenes
- **Premium Typography**: Neue Haas Grotesk Display for headlines, Inter for body text
- **Smooth Interactions**: Elegant transitions and hover effects
- **Storytelling**: Content flows naturally with visual hierarchy

## Key Features

### 1. Animated Background
- Three.js particle system with subtle parallax
- Responsive to scroll and mouse movement
- Premium, non-intrusive visual layer

### 2. Hero Section
- Cinematic entrance animations (staggered, scaled, faded)
- Parallax effect on mouse movement
- Scroll parallax effect
- Clear call-to-action buttons

### 3. About Section
- Story-driven narrative about professional background
- Tech stack showcase with styled badges
- Hobbies section with metaphorical descriptions
- Scroll-triggered animations

### 4. Projects Section
- Featured showcase of key projects
- Project highlights and technologies
- Direct GitHub links
- Staggered card animations on scroll

### 5. GitHub Integration
- Live fetching of public repositories
- Displays stars, language, and topics
- Auto-formatted with error handling
- Responsive grid layout

### 6. Expertise Section
- AI and data expertise overview
- Political sector focus with governance applications
- Scroll-triggered animations
- Clear visual hierarchy

### 7. Contact Section
- Contact form with validation
- Social links (GitHub, LinkedIn, Email)
- Smooth form interactions
- Success/error feedback

### 8. Premium Footer
- Quick navigation links
- Social media connections
- Copyright and credits

## Customization Guide

### Updating Content

**Hero Section:**
Edit `client/src/components/HeroSectionEnhanced.tsx` to change:
- Name and tagline
- Call-to-action text and links

**About Section:**
Edit `client/src/components/AboutSection.tsx` to update:
- Professional narrative
- Hobbies and interests
- Tech stack badges

**Projects Section:**
Edit `client/src/components/ProjectsSection.tsx` to modify:
- Featured projects array
- Project descriptions and highlights
- Technologies list

**Expertise Section:**
Edit `client/src/components/ExpertiseSection.tsx` to customize:
- Expertise areas and descriptions
- Applications and use cases
- Political sector focus

**Contact Information:**
Edit `client/src/components/ContactSection.tsx` and `Footer.tsx` to update:
- Email address
- Social media links
- Contact form handling

### Styling & Design Tokens

All colors, fonts, and spacing are defined in `client/src/index.css`:

```css
:root {
  --primary: oklch(0.55 0.2 250);           /* Blue accent */
  --background: oklch(0.98 0.001 0);        /* Light background */
  --foreground: oklch(0.15 0.02 0);         /* Dark text */
  /* ... more tokens ... */
}
```

To customize:
1. Modify OKLCH color values in `:root` and `.dark` sections
2. Update typography in `@layer components`
3. Adjust spacing in Tailwind configuration

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Use the same animation patterns from existing sections
3. Import and add to `client/src/pages/Home.tsx`
4. Update navigation links if needed

## Performance Optimization

### Current Optimizations

- **Code Splitting**: Vite automatically splits code by route
- **Image Optimization**: Three.js particles instead of heavy images
- **Lazy Loading**: Components load as needed
- **CSS Optimization**: Tailwind purges unused styles
- **Animation Performance**: GSAP optimized for 60fps

### Best Practices

1. **Minimize Heavy Animations**: Use CSS transforms and opacity
2. **Lazy Load External Data**: GitHub API calls are cached
3. **Optimize Images**: Use WebP format when possible
4. **Monitor Bundle Size**: Keep dependencies minimal
5. **Test on Mobile**: Ensure smooth performance on slower devices

## Deployment Options

### Option 1: Manus (Recommended)

The portfolio is built to deploy seamlessly on Manus with built-in hosting:

1. Click the **Publish** button in the Management UI
2. Configure your domain (auto-generated or custom)
3. Deploy with a single click

**Advantages:**
- Zero configuration needed
- Custom domain support
- Automatic SSL/TLS
- Built-in analytics
- Easy rollback

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Configuration:** Vercel auto-detects Vite and configures correctly.

### Option 3: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Configuration:** Create `netlify.toml`:
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 4: Self-Hosted (Node.js)

```bash
# Build
pnpm build

# Start production server
NODE_ENV=production node dist/index.js
```

Requires Node.js 18+ and a server (AWS, DigitalOcean, etc.).

## Development Workflow

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open browser to http://localhost:3000
```

### Building for Production

```bash
# Type check
pnpm check

# Build
pnpm build

# Preview production build
pnpm preview
```

### Code Quality

```bash
# Format code
pnpm format

# Type checking (continuous)
pnpm check
```

## Environment Variables

No environment variables are required for basic functionality. Optional:

```env
# GitHub API (optional, for higher rate limits)
VITE_GITHUB_TOKEN=your_github_token
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile latest

## Accessibility

The portfolio includes:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators on interactive elements

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags in `index.html`
- Open Graph tags for social sharing
- Structured data ready (can add JSON-LD)
- Mobile-responsive design

**To add custom meta tags:**
Edit `client/index.html`:
```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your title">
<meta property="og:description" content="Your description">
```

## Troubleshooting

### Animations Not Working
- Check browser console for errors
- Ensure GSAP is properly imported
- Verify ScrollTrigger is registered
- Check for CSS conflicts

### GitHub Projects Not Loading
- Verify GitHub username is correct in `useGitHubProjects`
- Check browser console for API errors
- GitHub API has rate limits (60 requests/hour unauthenticated)
- Consider adding GitHub token for higher limits

### Styling Issues
- Clear browser cache (Cmd+Shift+Delete)
- Rebuild CSS with `pnpm build`
- Check Tailwind configuration in `tailwind.config.js`
- Verify custom fonts are loading

### Performance Issues
- Check Network tab in DevTools
- Disable heavy animations on mobile
- Optimize images and assets
- Use Lighthouse for performance audit

## Maintenance

### Regular Updates

1. **Dependencies**: Run `pnpm update` monthly
2. **Security**: Monitor for vulnerabilities with `pnpm audit`
3. **Content**: Update projects and skills regularly
4. **Analytics**: Review traffic and user behavior

### Monitoring

- Use built-in Manus analytics
- Set up error tracking (Sentry, etc.)
- Monitor performance with Web Vitals
- Track user engagement

## Support & Resources

- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Three.js**: https://threejs.org
- **GSAP**: https://gsap.com
- **Manus Documentation**: https://help.manus.im

## License

This portfolio is personal and proprietary. All code and content are owned by Shanskar Bansal.

## Next Steps

1. **Customize Content**: Update all sections with your information
2. **Add Your Images**: Replace placeholder assets
3. **Test Thoroughly**: Check all links and forms
4. **Optimize Performance**: Run Lighthouse audit
5. **Deploy**: Use your preferred hosting platform
6. **Monitor**: Track analytics and user feedback

---

**Built with ❤️ using React, Three.js, GSAP, and Tailwind CSS**
