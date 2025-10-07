# SICHENERGOPROM - Professional Energy Engineering Website

A modern, professional landing page for ТОВ «СІЧЕНЕРГОПРОМ» (SICHENERGOPROM LLC), a leading Ukrainian energy engineering company specializing in electrical installation, industrial automation, and power distribution equipment manufacturing.

## 🌟 Overview

This website showcases SICHENERGOPROM's expertise in energy engineering and automation solutions, featuring a clean, modern design that reflects the company's professional standards and innovative approach to industrial power systems.

## ✨ Key Features

### 🎨 **Modern Design System**
- **Professional aesthetic** tailored for industrial engineering
- **Brand-specific color palette** with Verdigris (#3AAAA6) as primary color
- **Inter font family** for excellent readability and modern appeal
- **Glassmorphism elements** for contemporary visual effects

### 📱 **Responsive & Accessible**
- **Fully responsive design** optimized for all devices
- **Semantic HTML5** structure for accessibility
- **Smooth animations** and micro-interactions
- **ARIA labels** and keyboard navigation support

### 🏭 **Interactive Sections**
- **Dynamic hero section** with background image and gradient overlay
- **3D service cards** with hover effects and expandable details
- **Animated statistics** in the about section
- **Professional contact form** with validation
- **Background patterns** unique to each section

### 🌐 **Localization**
- **Complete Ukrainian localization** - все розділи українською мовою
- **Real company data** - актуальна інформація про СІЧЕНЕРГОПРОМ
- **Local contact information** - контакти в Запоріжжі, Україна

## 🎨 Design System

### Color Palette
```css
--verdigris: #3AAAA6      /* Primary brand color */
--seasalt: #F8F7F8        /* Light background */
--dim-gray: #717272       /* Text colors */
--white: #FDFDFD          /* Clean backgrounds */
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Responsive sizes**: 4xl/5xl/6xl for headings, optimized for mobile

### Background Patterns
- **Services**: Technical grid with rotated company text
- **About**: Hexagonal geometric pattern with floating elements
- **Contact**: Circuit board pattern with Ukrainian keywords

## 🏗️ Architecture

### Component Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout with Inter font & metadata
│   ├── page.tsx             # Main page composition
│   └── globals.css          # Global styles & animations
├── components/
│   ├── Header.tsx           # Scroll-hiding navigation
│   ├── Hero.tsx             # Main hero with background image
│   ├── ServicesTicker.tsx   # Scrolling services banner
│   ├── Services.tsx         # Interactive service showcase
│   ├── About.tsx            # Company info with animated stats
│   ├── Contact.tsx          # Contact form and company details
│   └── Footer.tsx           # Site footer
└── public/
    ├── images/              # Company assets and backgrounds
    └── favicon.ico          # Company logo as favicon
```

### Tech Stack
- **Framework**: Next.js 15.5.4 with Turbopack
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS v3 with custom utilities
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts (Inter) with Cyrillic support

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd sichenergoprom

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint checking
```

### Key Configuration Files
- `next.config.ts` - Next.js configuration with image quality settings
- `tailwind.config.js` - Tailwind CSS with custom color system
- `tsconfig.json` - TypeScript configuration

## � Content Sections

### 🏠 **Hero Section**
- Company mission statement in Ukrainian
- Dark gradient overlay for text readability
- Industrial background image
- Left-aligned text layout

### ⚡ **Services Section** 
1. **Електромонтажні роботи** - Main electrical installation services
2. **Виробництво електророзподільної апаратури** - Power distribution equipment
3. **Інжиніринг та консультування** - Engineering and consulting
4. **Спорудження об'єктів електропостачання** - Power infrastructure construction

### 🏢 **About Section**
- Company history and expertise
- Animated statistics: 17+ years, 200+ projects, 25+ experts
- Key capabilities and advantages
- Mission statement

### 📞 **Contact Section**
- Complete company contact information
- Professional consultation request form
- Real Zaporizhzhia address and phone numbers
- Business hours and emergency contact info

## 🌐 SEO & Metadata

### Optimized Metadata
- **Title**: "SICHENERGOPROM - Інноваційні рішення для енергетики та автоматизації"
- **Description**: Comprehensive Ukrainian description with key services
- **Keywords**: Energy, automation, electrical installation, engineering
- **Open Graph**: Social media sharing optimization
- **Structured data**: Company information for search engines

### Performance
- **Image optimization** with Next.js Image component
- **Font optimization** with Google Fonts display=swap
- **Code splitting** with Next.js App Router
- **Responsive images** with proper quality settings

## 📊 Company Information

**ТОВ «СІЧЕНЕРГОПРОМ»** (SICHENERGOPROM LLC)
- **Address**: 69037, Україна, м. Запоріжжя, вул. Бойрачна, буд. 7
- **Phone**: +380 66 920 10 01 / +380 98 920 10 01  
- **Email**: office@sep.zp.ua
- **Website**: www.sep.zp.ua
- **Founded**: 2007 (17+ years experience)
- **Projects**: 200+ completed projects
- **Team**: 25+ specialists

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/`
2. Add to main page in `src/app/page.tsx`
3. Update navigation in Header component
4. Add scroll functionality if needed

### Updating Content
- **Services**: Modify `Services.tsx` component
- **Contact Info**: Update `Contact.tsx` component  
- **Company Stats**: Edit `About.tsx` component
- **Metadata**: Update `layout.tsx` file

### Styling Changes
- **Colors**: Update `tailwind.config.js`
- **Fonts**: Modify font imports in `layout.tsx`
- **Animations**: Add to `globals.css`

## 📈 Future Enhancements

- [ ] **Multi-language support** (Ukrainian/English toggle)
- [ ] **Project portfolio** gallery section
- [ ] **Team members** showcase
- [ ] **News/blog** section for company updates
- [ ] **Client testimonials** and case studies
- [ ] **Interactive project map** of completed installations

## � License

© 2025 ТОВ «СІЧЕНЕРГОПРОМ» (SICHENERGOPROM LLC). All rights reserved.

---

**Built with ❤️ for Ukrainian energy engineering excellence**
