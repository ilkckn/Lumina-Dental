# 🦷 Lumina Dental — Modern Dental Clinic Landing Page

<div align="center">

![Lumina Dental](https://img.shields.io/badge/Lumina-Dental-2dd4bf?style=for-the-badge&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Development-f9731a?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-38bdf8?style=for-the-badge&logo=react&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-fb7185?style=for-the-badge)

**Modern, wellness-odaklı bir diş kliniği için tasarlanmış şık ve duyarlı landing page.**

*Designed & Developed by [MCCreative](https://github.com/)*

</div>

---

## ✨ Proje Hakkında

**Lumina Dental**, geleneksel diş kliniklerinin soğuk ve steril görünümünden uzaklaşarak hastaları karşılayan sıcak, modern ve güven verici bir dijital deneyim sunmak amacıyla tasarlanmıştır.

> *"Gülüşünüz Işığınız Olsun"* — Lumina Dental

Bu proje, **MCCreative** portföyü kapsamında geliştirilmiş olup küçük ve orta ölçekli diş kliniklerine yönelik frontend çözümünün bir örneğidir.

---

## 🎯 Özellikler

- 🌟 **Hero Section** — Dikkat çekici başlık, CTA butonları ve hasta rating kartı
- 🦷 **Uzmanlık Alanları** — Estetik gülüş, implant, ortodonti ve çocuk diş sağlığı
- 📊 **İstatistik Çubuğu** — Deneyim yılı, puan, hasta sayısı ve hekim sayısı
- 💬 **Hasta Yorumları** — Gerçekçi testimonialler ile sosyal kanıt
- 👨‍⚕️ **Ekip Tanıtımı** — Uzman hekimlerin kart bazlı tanıtımı
- 📅 **Randevu Formu** — Kolay kullanımlı iletişim ve randevu alma formu
- 📍 **Konum & İletişim** — Adres, telefon, çalışma saatleri ve harita alanı
- 📱 **Tam Responsive** — Mobil, tablet ve masaüstü uyumlu
- 🎨 **Glassmorphism** — Modern buzlu cam navbar ve kart efektleri
- ⚡ **Smooth Animasyonlar** — Hover efektleri ve geçiş animasyonları

---

## 🖼️ Ekran Görüntüleri

| Hero Section | Uzmanlık Alanları |
|:---:|:---:|
| *Ekran görüntüsü eklenecek* | *Ekran görüntüsü eklenecek* |

| Ekip & Yorumlar | Randevu Formu |
|:---:|:---:|
| *Ekran görüntüsü eklenecek* | *Ekran görüntüsü eklenecek* |

---

## 🎨 Design System

Bu proje **Vibrant Dental System** tasarım sistemi üzerine inşa edilmiştir.

### Renk Paleti

| Rol | Renk | Hex | Kullanım |
|-----|------|-----|----------|
| Primary | 🟢 Mint Green | `#2dd4bf` | Ana aksiyonlar, başarı durumları |
| Secondary | 🔵 Sky Blue | `#38bdf8` | Bilgi elementleri, ikincil aksiyonlar |
| Tertiary | 🌸 Warm Coral | `#fb7185` | Aksan, "Randevu Al" butonu |
| Neutral | 🩶 Slate | `#475569` | Gövde metni, ikincil içerik |
| Background | ⬜ Soft White | `#fcfcfd` | Sayfa arka planı |

### Gradientler

```css
/* Logo gradient */
background: linear-gradient(135deg, #0c5a50 0%, #0e89bd 100%);

/* Hero arka plan */
background: linear-gradient(160deg, #f0fdfa 0%, #f8f9ff 50%, #eff4ff 100%);

/* Birincil buton */
background: linear-gradient(135deg, #006b5f 0%, #00668a 100%);

/* Randevu butonu */
background: linear-gradient(135deg, #f9731a 0%, #fb7185 100%);
```

### Tipografi

| Stil | Font | Boyut | Ağırlık |
|------|------|-------|---------|
| Başlıklar | Montserrat | 48px / 32px (mobil) | 700–800 |
| Alt başlıklar | Montserrat | 24px | 600 |
| Gövde metni | Plus Jakarta Sans | 16–18px | 400 |
| Etiketler | Plus Jakarta Sans | 14px | 700 |

### Efektler

```css
/* Glassmorphism Navbar */
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.70);
border: 1px solid rgba(255, 255, 255, 0.50);

/* Gradient Glow Shadow */
filter: blur(10px);
opacity: 0.6;
transform: translateY(4px);
```

---

## 🛠️ Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| [React](https://react.dev/) | 18+ | UI framework |
| [Vite](https://vitejs.dev/) | 5+ | Build tool & dev server |
| CSS3 | — | Custom design system, CSS Variables |
| Google Fonts | — | Montserrat & Plus Jakarta Sans |

---

## 📁 Proje Yapısı

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

## 🚀 Kurulum & Çalıştırma

### Gereksinimler

- Node.js `v18+`
- npm veya yarn

### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/mccreative/lumina-dental.git

# 2. Proje klasörüne gir
cd lumina-dental

# 3. Bağımlılıkları yükle
npm install

# 4. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcında `http://localhost:5173` adresini aç.

### Build

```bash
# Production build
npm run build

# Build önizleme
npm run preview
```

---

## 📋 Sayfa Bölümleri

```
┌─────────────────────────────────┐
│  🔝 Navbar (Glassmorphism)      │
├─────────────────────────────────┤
│  🌟 Hero                        │
│     Başlık + CTA + Rating Kartı │
├─────────────────────────────────┤
│  🦷 Uzmanlık Alanları           │
│     4 hizmet kartı              │
├─────────────────────────────────┤
│  📊 İstatistik Çubuğu           │
│     12 yıl · 4.9★ · 2000+ · 8  │
├─────────────────────────────────┤
│  💬 Hasta Yorumları             │
│     3 testimoniyal kartı        │
├─────────────────────────────────┤
│  👨‍⚕️ Ekip Tanıtımı              │
│     3 hekim kartı               │
├─────────────────────────────────┤
│  📅 Randevu & İletişim          │
│     Form + Adres + Harita       │
├─────────────────────────────────┤
│  📌 Footer                      │
└─────────────────────────────────┘
```

---

## 🗺️ Yol Haritası

- [x] Design system & CSS variables
- [x] Navbar (glassmorphism)
- [x] Hero section
- [x] Uzmanlık alanları
- [x] İstatistik çubuğu
- [x] Hasta yorumları
- [x] Ekip tanıtımı
- [x] Randevu formu
- [ ] Mobil responsive iyileştirmeleri
- [ ] Sayfa geçiş animasyonları (Framer Motion)
- [ ] Form validasyonu
- [ ] EmailJS entegrasyonu
- [ ] Google Maps entegrasyonu
- [ ] SEO optimizasyonu
- [ ] Lighthouse performans optimizasyonu

---

## 👨‍💻 Geliştirici

<div align="center">

**Musa Çekçen**
Frontend Developer & Digital Designer

[![MCCreative](https://img.shields.io/badge/MCCreative-Portfolio-2dd4bf?style=for-the-badge)](https://github.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-38bdf8?style=for-the-badge&logo=linkedin)](https://linkedin.com/)

*Efringen-Kirchen, Baden-Württemberg, Deutschland 🇩🇪*

</div>

---

## 📄 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

---

<div align="center">

**MCCreative** tarafından ❤️ ile tasarlandı ve geliştirildi.

*Frontend geliştirme ve dijital tasarım hizmetleri için iletişime geçin.*

</div>
