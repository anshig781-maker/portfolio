# Aanshi Gupta — Personal Portfolio Website

A modern, minimalist, and editorial personal portfolio website for **Aanshi Gupta**, BBA student specializing in Finance and Marketing at Allenhouse Business School, Kanpur.

Designed with a high-end business consultant aesthetic featuring deep navy blue, off-white/ivory surfaces, muted gold accents, and subtle grey borders.

---

## 📁 Repository Structure

```text
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── profile.jpg             # Replace with your own profile photograph
│   ├── gram_tech_hub.jpg       # Gram-Tech Studio showcase visual
│   ├── business_competition.jpg# Aarambh 2.0 competition photo
│   └── assets/
│       └── resume.pdf          # Your downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # 3-zone clean top bar navigation
│   │   ├── Footer.tsx          # Minimalist footer with quick links & back-to-top
│   │   ├── ResumeModal.tsx     # Printable/downloadable resume viewer
│   │   └── DeploymentGuideModal.tsx # In-app GitHub Pages guide
│   ├── sections/
│   │   ├── HeroSection.tsx     # Intro, headline, metrics strip, CTAs
│   │   ├── AboutSection.tsx    # Academic journey and business philosophy
│   │   ├── EducationSection.tsx# Allenhouse B-School & KV Chakeri
│   │   ├── ExperienceSection.tsx# CA firm internship (Vivek K.B. Gupta & Co.)
│   │   ├── SkillsSection.tsx   # Categorized business, technical, & AI skills
│   │   ├── GramTechSection.tsx # Flagship Rural Supply-Chain Hub showcase
│   │   ├── ProjectsSection.tsx # Aarambh 2.0, AI Conference, HR Case, REETH
│   │   ├── AchievementsSection.tsx # Leadership & distinctions
│   │   ├── CareerInterestsSection.tsx # 7 core career trajectories
│   │   └── ContactSection.tsx  # Working email, privacy toggle & form
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind CSS & editorial typography
├── index.html                  # HTML entry point with meta tags & Google fonts
├── package.json                # Scripts and project dependencies
├── vite.config.ts              # Vite configuration with configurable base path
└── README.md                   # Complete GitHub Pages deployment guide
```

---

## 🚀 How to Deploy on GitHub Pages (Step-by-Step)

You can host this website completely **FREE** on GitHub Pages without buying a domain or paying for hosting.

### Step 1: Create a GitHub Repository

1. Go to [github.com/anshig781-maker](https://github.com/anshig781-maker) and make sure you are logged in.
2. Click the **+** (plus) icon in the top right corner and select **New repository**.
3. Name your repository `portfolio` (or `anshig781-maker.github.io` if you want it as your primary GitHub user site).
4. Set the visibility to **Public**.
5. Leave "Add a README file" **unchecked** (we already have a complete one).
6. Click **Create repository**.

### Step 2: Configure the Base Path in `vite.config.ts`

Open `vite.config.ts`:
By default, `base: process.env.VITE_BASE_PATH || './'` is already configured for relative paths, which automatically works out-of-the-box on GitHub Pages without any edits!

### Step 3: Push Your Files to GitHub

Open your terminal or command prompt inside the project folder and run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Commit your changes
git commit -m "feat: complete Aanshi Gupta portfolio website"

# 4. Set branch to main
git branch -M main

# 5. Connect to your GitHub repository
git remote add origin https://github.com/anshig781-maker/portfolio.git

# 6. Push code to GitHub
git push -u origin main
```
*(If you named your repo something other than `portfolio`, replace `portfolio` with your chosen repository name).*

### Step 4: Enable GitHub Pages with GitHub Actions

1. Open your repository at `https://github.com/anshig781-maker/portfolio`.
2. Click **Settings** (gear icon at the top right).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** → **Source**, change from *Deploy from a branch* to **GitHub Actions**.
5. That's it! GitHub Actions will immediately pick up the pre-configured `.github/workflows/deploy.yml` workflow.
6. Within 1–2 minutes, your website will be live at:
   `https://anshig781-maker.github.io/portfolio/`

---

## ✏️ How to Customize & Update Your Portfolio Later

All content is cleanly organized in **`src/data/portfolioData.ts`**:

1. **Update Bio / Grades / Objective**:
   Open `src/data/portfolioData.ts` and edit `PERSONAL_INFO` or `EDUCATION_DATA`.
2. **Replace Profile Photo**:
   Drop your photo into `public/profile.jpg` (or update the filename in `src/sections/HeroSection.tsx`).
3. **Add or Replace Resume PDF**:
   Save your PDF as `public/assets/resume.pdf`.
4. **Push Updates**:
   ```bash
   git add .
   git commit -m "update: refreshed resume and academic achievements"
   git push origin main
   ```
   GitHub Actions will automatically build and publish your updates within 90 seconds!

---

## 🛠️ Local Development

To run and preview the site on your computer:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Privacy Controls

- Your personal phone number and residential address are not listed.
- Your email (`anshig781@gmail.com`) includes a privacy toggle on the website allowing visitors to show or hide the email address.
