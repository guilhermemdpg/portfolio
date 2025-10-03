# Portfolio Website - User Guide

Welcome to your new portfolio website! This guide will help you customize and run your portfolio.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Installation & Running

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   Your portfolio will be available at `http://localhost:8080`

3. **Build for production**
   ```bash
   npm run build
   ```

## ✏️ How to Edit Your Portfolio

All portfolio content can be edited in **one single file**:

### 📄 `src/config/portfolio.ts`

This is your main configuration file. Open it and you'll find all editable content organized into sections:

#### **Personal Information**
```typescript
name: "Your Name"
title: "Your Job Title"
tagline: "Your professional tagline"
```

#### **Hero Section**
Edit your landing page content:
- Greeting message
- Main description
- Call-to-action buttons

#### **About Section**
- Add your bio paragraphs
- Update your profile image path

#### **Skills Section**
Add or modify skill categories and items:
```typescript
{
  name: "Frontend",
  items: ["React", "TypeScript", "Tailwind CSS"]
}
```

#### **Projects Section**
Showcase your work:
```typescript
{
  title: "Project Name",
  description: "What it does",
  image: "/path/to/image.jpg",
  tags: ["React", "Node.js"],
  liveUrl: "https://...",
  githubUrl: "https://github.com/..."
}
```

#### **Contact Section**
- Update your email
- Add social media links (GitHub, LinkedIn, Twitter)

## 🎨 Customizing Styles

### Colors & Theme
Edit `src/index.css` to change:
- Primary and accent colors
- Gradients
- Shadows
- Animations

Look for the `:root` section with CSS variables like:
```css
--primary: 217 91% 60%;
--accent: 262 83% 58%;
```

### Component Styling
Individual components are in `src/components/`:
- `Navigation.tsx` - Top navigation bar
- `Hero.tsx` - Landing section
- `About.tsx` - About section
- `Skills.tsx` - Skills showcase
- `Projects.tsx` - Projects grid
- `Contact.tsx` - Contact section
- `Footer.tsx` - Footer

## 📸 Adding Images

### For Projects & About Section
1. Place images in the `public` folder
2. Reference them in `portfolio.ts`:
   ```typescript
   image: "/your-image.jpg"
   ```

### Recommended Image Sizes
- Profile photo: 500x500px (square)
- Project images: 1200x630px (16:9 ratio)

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Modifying Animations
Tailwind CSS animations are defined in `tailwind.config.ts`

### SEO Optimization
Update meta tags in `index.html`:
- Page title
- Description
- Open Graph tags

## 📱 Responsive Design

The portfolio is fully responsive out of the box. Test on different screen sizes:
- Desktop: 1920px+
- Tablet: 768px - 1919px  
- Mobile: < 768px

## 🌐 Deployment

### Deploy to Lovable
1. Click the **Publish** button in the Lovable editor
2. Your site will be live at `yoursite.lovable.app`

### Deploy to Other Platforms
After running `npm run build`, deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 💡 Tips

1. **Keep it Simple**: Start with the basics and add more as needed
2. **Use Real Data**: Replace placeholder content with your actual work
3. **Test Responsiveness**: Check on mobile devices
4. **Optimize Images**: Compress images before uploading
5. **Update Regularly**: Keep your portfolio current with new projects

## 🆘 Need Help?

- Check the [Lovable Documentation](https://docs.lovable.dev/)
- Visit the [Lovable Discord Community](https://discord.gg/lovable)
- Review component documentation in each `.tsx` file

## 📝 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── config/
│   └── portfolio.ts    # ⭐ EDIT THIS FILE
├── pages/
│   └── Index.tsx       # Main page
└── index.css           # Global styles
```

---

**Remember**: The main file you need to edit is `src/config/portfolio.ts` - everything else will update automatically! 🎉
