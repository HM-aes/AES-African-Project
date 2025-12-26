# AES Pan-African Project

A modern Next.js web application showcasing the Alliance of Sahel States (AES) - a union between Mali, Burkina Faso, and Niger. This project features beautiful UI components, 3D visualizations, and comprehensive information about the AES initiative.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 15, React, and Tailwind CSS
- **3D Visualizations**: Interactive Spline 3D scenes
- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Dynamic Content**: Blog posts, hero profiles, and interactive cards
- **Performance Optimized**: Turbopack for faster builds

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## 🛠️ Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aes-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔒 Environment Variables

This project uses environment variables for configuration. See `.env.example` for a template.

- **Public variables** (prefixed with `NEXT_PUBLIC_`): Exposed to the browser
- **Server-only variables**: Only available on the server side

**Important**: Never commit `.env.local` or any file containing actual secrets to git!

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (see instructions below)

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if any)
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add any required variables from `.env.example`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Pushing to GitHub

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Create a new repository (don't initialize with README)

2. **Push your code**
   ```bash
   git add .
   git commit -m "Initial commit: AES Pan-African Project"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Verify**
   - Check GitHub to ensure no `.env` files were committed
   - Only `.env.example` should be visible

## 🔐 Security Checklist

Before pushing to GitHub:

- ✅ `.gitignore` includes `.env*` (except `.env.example`)
- ✅ No hardcoded API keys or secrets in code
- ✅ `.env.example` contains only template/example values
- ✅ All sensitive data uses environment variables

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Aceternity UI
- **3D Graphics**: Spline, Three.js
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📚 Project Structure

```
aes-portal/
├── app/              # Next.js app directory
├── components/       # React components
├── data/            # Static data files
├── lib/             # Utility functions
├── public/          # Static assets
├── types/           # TypeScript type definitions
└── .env.example     # Environment variables template
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
