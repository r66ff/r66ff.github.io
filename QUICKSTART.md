# Quick Start Guide

Your new Astro portfolio site is ready! 🎉

## What's Been Created

### ✅ Complete Portfolio Site
- **Homepage** with hero, about, skills, projects, and contact sections
- **6 Project Pages** with detailed descriptions
- **Dark Mode** toggle with localStorage persistence
- **Project Filtering** by technology tags
- **Responsive Design** optimized for mobile, tablet, and desktop

### ✅ Content Collections
All your projects converted to Markdown:
- Articulo Mobile App
- Multithreaded Server
- RSA Implementation in Python
- Mirai Botnet Research
- Budget App
- Responsive Web Development

### ✅ Deployment Configuration
- GitHub Actions workflow for automatic deployment
- Manual deployment option as fallback
- Comprehensive README with instructions

## Next Steps

### 1. Test Locally

Start the development server:
```bash
npm run dev
```

Open http://localhost:4321 in your browser to see your site!

### 2. Preview Production Build

The site has already been built successfully. To preview:
```bash
npm run preview
```

### 3. Deploy to GitHub Pages

#### Option A: Automatic Deployment (Recommended)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add new Astro portfolio site"
   git push origin main
   ```

2. Configure GitHub Pages:
   - Go to Settings → Pages
   - Source: **GitHub Actions**
   - The workflow will auto-deploy on push
   - Note: **Do not** use “Deploy from a branch” for Astro, since Jekyll will fail on `.astro` files.

3. Enable Workflow Permissions:
   - Settings → Actions → General
   - Workflow permissions: **Read and write permissions**
   - Save

Your site will be live at: `https://r66ff.github.io/`

#### Option B: Manual Deployment

```bash
npm run build
# Then deploy the dist/ folder to gh-pages branch
```

## Customization

### Add a New Project

1. Create a file in `src/content/projects/my-project.md`:

```markdown
---
title: "My New Project"
description: "Short description"
tags: ["React", "TypeScript"]
date: 2024-01-15
featured: true
demo: "https://demo.com"
github: "https://github.com/user/repo"
image: "/img/my-project.png"
---

## Project details here...
```

2. Add images to `public/img/`
3. Rebuild: `npm run build`

### Update Skills

Edit `src/components/SkillsList.astro` to modify your skills.

### Update Bio

Edit the About Me section in `src/pages/index.astro`.

### Change Colors

Customize in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## File Structure

```
tda/
├── public/              # Static assets
│   ├── img/            # Your images and PDFs
│   └── favicon.ico
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Markdown project files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes (homepage, project pages)
│   └── styles/         # Global CSS
├── .github/
│   └── workflows/      # GitHub Actions deployment
├── README.md           # Full documentation
└── package.json
```

## Build Output

✅ Successfully built:
- Homepage: `/index.html`
- 6 Project pages: `/projects/[project-name]/`
- All images and assets copied
- Optimized for production

## Troubleshooting

### Dark Mode Not Working
- Clear browser cache and localStorage
- Check browser console for errors

### Projects Not Showing
- Verify markdown files have correct frontmatter
- Check date format: `YYYY-MM-DD`
- Rebuild the site: `npm run build`

### Build Fails
- Delete `node_modules` and `dist`
- Run `npm install` again
- Check for TypeScript errors: `npm run astro check`

## Support

See the full [README.md](README.md) for detailed documentation on:
- Content management
- Deployment options
- Customization
- Troubleshooting

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages](https://docs.github.com/en/pages)

---

**Built with Astro v5 and Tailwind CSS v3**

Enjoy your new portfolio! 🚀
