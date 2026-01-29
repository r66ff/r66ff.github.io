# Portfolio Website

A modern, minimal portfolio site built with Astro and Tailwind CSS, featuring project showcases, dark mode, and responsive design.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5 - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3 - Utility-first CSS framework
- **Content**: Markdown files with frontmatter in Content Collections
- **Deployment**: GitHub Pages (static output)

## Features

- 🌓 **Dark Mode** - Toggle with localStorage persistence
- 🏷️ **Project Filtering** - Filter projects by technology tags
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Fast Performance** - Static site generation
- 🎨 **Modern UI** - Clean, minimal design with Tailwind CSS
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG 2.0 compliant

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/r66ff/r66ff.github.io.git
cd tda
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### 5. Preview production build

```bash
npm run preview
```

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.ico
│   └── img/                    # Images and PDFs
│       ├── logo.png
│       ├── antonina.jpg
│       ├── antonina-serdyukova-resume-2025.pdf
│       └── ...
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillsList.astro
│   │   └── ThemeToggle.astro
│   ├── content/
│   │   ├── config.ts          # Content collection schemas
│   │   └── projects/          # Project markdown files
│   │       ├── articulo.md
│   │       ├── multithreaded-server.md
│   │       └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with dark mode
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   └── projects/
│   │       └── [slug].astro   # Dynamic project pages
│   └── styles/
│       └── global.css         # Global styles and Tailwind directives
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## Content Management

### Adding a New Project

1. Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Title"
description: "Short description of the project"
tags: ["React", "TypeScript", "Node.js"]
date: 2024-01-15
featured: true
demo: "https://demo-url.com"
github: "https://github.com/username/repo"
image: "/img/project-image.png"
banner: "/img/project-banner.png"
---

## Project Overview

Your project content here in Markdown...
```

2. Add project images to `public/img/`

3. The project will automatically appear on the homepage and generate its own page at `/projects/project-filename`

### Frontmatter Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Project title |
| `description` | string | Yes | Short description |
| `tags` | array | Yes | Technology tags for filtering |
| `date` | date | Yes | Project date (YYYY-MM-DD) |
| `featured` | boolean | No | Show on homepage (default: false) |
| `demo` | URL | No | Live demo URL |
| `github` | URL | No | GitHub repository URL |
| `video` | URL | No | Video demo URL |
| `image` | string | No | Preview image path |
| `banner` | string | No | Banner image path |
| `icon` | string | No | Icon identifier |

### Updating Skills

Edit the skills data in `src/components/SkillsList.astro`:

```javascript
const skills = {
  languages: ['Python', 'JavaScript', ...],
  frameworks: ['React', 'Node.js', ...],
  tools: ['Git', 'Docker', ...]
}
```

### Updating Bio

Edit the content in `src/pages/index.astro` in the About Me section.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

#### Setup Steps:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configure GitHub Repository Settings**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings
   - Note: **Do not** use “Deploy from a branch” for Astro, since Jekyll will try to parse `.astro` files and fail.

3. **Enable Workflow Permissions**:
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**, select **Read and write permissions**
   - Check **Allow GitHub Actions to create and approve pull requests**
   - Save

4. **Trigger Deployment**:
   - Push any commit to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Check the **Actions** tab to monitor deployment progress
   - Once complete, your site will be live at `https://r66ff.github.io/`

### Option 2: Manual Deployment (Fallback)

If you prefer manual control or need to troubleshoot:

1. **Build the site locally**:
   ```bash
   npm run build
   ```

2. **Deploy the dist folder**:
   ```bash
   # Using gh-pages package (install if needed)
   npm install -g gh-pages
   gh-pages -d dist
   ```

3. **Configure GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages` / `root`
   - Save

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `public/` with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `r66ff.github.io`

3. Enable HTTPS in repository settings (recommended)

### Troubleshooting Deployment

If deployment fails:

1. **Check the Actions log** for error messages
2. **Verify Node.js version** matches what's in the workflow (v18)
3. **Ensure dependencies install** correctly with `npm ci`
4. **Check build succeeds locally** with `npm run build`
5. **Verify permissions** are set correctly in repository settings

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### Customizing Tailwind CSS

Edit `tailwind.config.mjs` to customize:

- Colors
- Spacing
- Typography
- Breakpoints
- And more

### Dark Mode Implementation

Dark mode uses Tailwind's class strategy:

- Toggle button in header
- LocalStorage persistence
- System preference detection on first load
- Use `dark:` prefix for dark mode styles

Example:
```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content
</div>
```

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the BaseLayout and components
3. Page will be automatically routed based on filename

Example `src/pages/about.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/Header.astro'
import Footer from '../components/Footer.astro'
---

<BaseLayout title="About | Your Name">
  <Header />
  <main class="pt-20">
    <!-- Your content -->
  </main>
  <Footer />
</BaseLayout>
```

## Performance

The site is optimized for performance:

- Static site generation (no JavaScript required for content)
- Minimal JavaScript for interactivity (dark mode, filtering)
- Optimized images
- CSS purging with Tailwind
- Fast page loads (< 2s on 3G)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
