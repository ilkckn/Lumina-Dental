# 🦷 Lumina Dental — Modern Dental Clinic Website

<div align="center">

![Lumina Dental](https://img.shields.io/badge/Lumina-Dental-2dd4bf?style=for-the-badge&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Development-f9731a?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-38bdf8?style=for-the-badge&logo=react&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-fb7185?style=for-the-badge)

**A modern, wellness-first dental clinic website built for real-world small clinics.**

*Designed & Developed by [MCCreative](https://github.com/)*

</div>

---

## ✨ About the Project

**Lumina Dental** is a fully responsive, multi-section dental clinic website that moves away from the cold and sterile look of traditional clinic websites. It delivers a warm, modern, and trust-inspiring digital experience — designed to convert first-time visitors into patients.

> *"Let Your Smile Be Your Light"* — Lumina Dental

This project is part of the **MCCreative** portfolio, showcasing frontend development and digital design services for small and medium-sized businesses — including dental clinics, private practices, and healthcare providers across Germany and the Basel/Lörrach region.

---

## 🎯 Features

- 🌟 **Hero Section** — Bold headline, dual CTA buttons, and a floating patient rating badge
- 🦷 **Services Section** — Aesthetic smile design, implants, orthodontics, and pediatric dentistry
- 📊 **Stats Bar** — Years of experience, average rating, patient count, and number of specialists
- 💬 **Patient Reviews** — Testimonial cards with real social proof
- 👨‍⚕️ **Team Section** — Expert dentist profiles presented in a clean card layout
- 📅 **Appointment Form** — Easy-to-use contact and booking form with service selection
- 📍 **Contact & Location** — Address, phone number, working hours, and Google Maps area
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎨 **Glassmorphism UI** — Frosted glass navbar and card effects throughout
- ⚡ **Smooth Animations** — Hover effects, gradient glows, and transitions

---

## 🖼️ Screenshots

| Hero Section | Services Section |
|:---:|:---:|
| *Screenshot coming soon* | *Screenshot coming soon* |

| Team & Reviews | Appointment Form |
|:---:|:---:|
| *Screenshot coming soon* | *Screenshot coming soon* |

---

## 🎨 Design System

This project is built on the **Vibrant Dental System** — a custom design system created specifically for this project.

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | 🟢 Mint Green | `#2dd4bf` | Main actions, success states |
| Secondary | 🔵 Sky Blue | `#38bdf8` | Informational elements, secondary actions |
| Tertiary | 🌸 Warm Coral | `#fb7185` | Accents, "Book Appointment" button |
| Neutral | 🩶 Slate | `#475569` | Body text, secondary content |
| Background | ⬜ Soft White | `#fcfcfd` | Page background |

### Gradients

```css
/* Logo text gradient */
background: linear-gradient(135deg, #0c5a50 0%, #0e89bd 100%);

/* Hero background */
background: linear-gradient(160deg, #f0fdfa 0%, #f8f9ff 50%, #eff4ff 100%);

/* Primary button */
background: linear-gradient(135deg, #006b5f 0%, #00668a 100%);

/* Appointment button */
background: linear-gradient(135deg, #f9731a 0%, #fb7185 100%);
```

### Typography

| Style | Font | Size | Weight |
|-------|------|------|--------|
| Display / Headlines | Montserrat | 48px / 32px (mobile) | 700–800 |
| Subheadings | Montserrat | 24px | 600 |
| Body text | Plus Jakarta Sans | 16–18px | 400 |
| Labels & buttons | Plus Jakarta Sans | 14px | 700 |

### Effects

```css
/* Glassmorphism Navbar */
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.70);
border: 1px solid rgba(255, 255, 255, 0.50);

/* Gradient Glow Shadow (button hover) */
filter: blur(10px);
opacity: 0.6;
transform: translateY(4px);

/* Navbar shadow */
box-shadow: 0 4px 24px rgba(169, 51, 73, 0.12);
```

---

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [React](https://react.dev/) | 18+ | UI framework |
| [Vite](https://vitejs.dev/) | 5+ | Build tool & dev server |
| CSS3 | — | Custom design system with CSS Variables |
| Google Fonts | — | Montserrat & Plus Jakarta Sans |

---

## 📁 Project Structure

```
lumina-dental/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Stats/
│   │   │   ├── Stats.jsx
│   │   │   └── Stats.css
│   │   ├── Reviews/
│   │   │   ├── Reviews.jsx
│   │   │   └── Reviews.css
│   │   ├── Team/
│   │   │   ├── Team.jsx
│   │   │   └── Team.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mccreative/lumina-dental.git

# 2. Navigate into the project folder
cd lumina-dental

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Preview the production build
npm run preview
```

---

## 📋 Page Sections

```
┌─────────────────────────────────┐
│  🔝 Navbar (Glassmorphism)      │
├─────────────────────────────────┤
│  🌟 Hero                        │
│     Headline + CTA + Rating     │
├─────────────────────────────────┤
│  🦷 Services                    │
│     4 specialty service cards   │
├─────────────────────────────────┤
│  📊 Stats Bar                   │
│     12yrs · 4.9★ · 2000+ · 8   │
├─────────────────────────────────┤
│  💬 Patient Reviews             │
│     3 testimonial cards         │
├─────────────────────────────────┤
│  👨‍⚕️ Meet the Team              │
│     3 dentist profile cards     │
├─────────────────────────────────┤
│  📅 Appointment & Contact       │
│     Form + Address + Map        │
├─────────────────────────────────┤
│  📌 Footer                      │
└─────────────────────────────────┘
```

---

## 🗺️ Roadmap

- [x] Design system & CSS variables
- [x] Glassmorphism navbar
- [x] Hero section
- [x] Services section
- [x] Stats bar
- [x] Patient reviews
- [x] Team section
- [x] Appointment & contact form
- [ ] Mobile responsive refinements
- [ ] Page scroll animations (Framer Motion)
- [ ] Form validation
- [ ] EmailJS integration
- [ ] Google Maps integration
- [ ] SEO optimization
- [ ] Lighthouse performance optimization
- [ ] Multi-language support (DE / TR / EN)

---

## 👨‍💻 Developer

<div align="center">

**Musa Çekçen**
Frontend Developer & Digital Designer

[![MCCreative](https://img.shields.io/badge/MCCreative-Portfolio-2dd4bf?style=for-the-badge)](https://github.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-38bdf8?style=for-the-badge&logo=linkedin)](https://linkedin.com/)

*Efringen-Kirchen, Baden-Württemberg, Germany 🇩🇪*

</div>

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

<div align="center">

Built with ❤️ by **MCCreative**

*Frontend development & digital design services for small businesses.*

</div>
