# Portfolio Website with Animations

A modern, fully animated portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, responsive design, and interactive components inspired by ReactBits design patterns.

## ✨ Features

- **Animated Hero Section** - Smooth fade-in animations with gradient text and floating elements
- **Project Showcase** - Animated project cards with hover effects and tags
- **Skills Section** - Animated skill cards with progress bars and hover effects
- **Contact Form** - Fully animated contact section with form inputs
- **Responsive Navigation** - Mobile-friendly navbar with smooth transitions
- **Dark Mode Design** - Beautiful dark theme with purple and pink gradients
- **Smooth Scroll** - Scroll-triggered animations for sections
- **Interactive Elements** - Buttons and links with micro-interactions

## 🚀 Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with animations
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section with progress bars
│   ├── Contact.tsx       # Contact form
│   ├── Navigation.tsx    # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── index.ts          # Component exports
├── App.tsx               # Main app component
├── App.css               # App styles
├── index.css             # Global styles + Tailwind
└── main.tsx              # Entry point
```

## 🎨 Customization

### Update Personal Information
Edit the following files to add your personal details:

- **Hero Section** (`src/components/Hero.tsx`):
  - Change "Your Name" to your actual name
  - Update the bio/description
  - Add your social links

- **Projects** (`src/components/Projects.tsx`):
  - Replace sample projects with your actual projects
  - Update GitHub and live demo links
  - Change project images/emojis

- **Skills** (`src/components/Skills.tsx`):
  - Add your technical skills and proficiencies
  - Adjust percentage values

- **Contact** (`src/components/Contact.tsx`):
  - Update your email address
  - Change phone number and location
  - Update form submission handler

### Styling Customization

Edit `tailwind.config.js` to customize:
- Colors and gradients
- Animation timing
- Responsive breakpoints

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint with ESLint
npm run lint
```

## 🎬 Animation Features

- **Framer Motion** for smooth transitions
- **Stagger animations** for sequenced element reveals
- **Scroll-triggered animations** using `whileInView`
- **Hover effects** on interactive elements
- **Parallax effects** on hero section
- **Progress bar animations** in skills section

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on push

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name
2. Build: `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 📝 Notes

- The contact form currently logs to console. Integrate with a backend service (Formspree, Emailjs, etc.) for actual email sending
- Replace emoji placeholders in projects with actual images
- Add your CV file for the "Download CV" button
- Update social media links in Navigation and Footer components

## 🎯 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Testimonials carousel
- [ ] 3D animations with Three.js
- [ ] Email integration with backend

## 📄 License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
