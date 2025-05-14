# MBTI 퍼스널 트레이닝 매뉴얼 (MBTI Training Guide)

A production-ready single-page React + Tailwind CSS web app for displaying tailored coaching strategies for each MBTI personality type.

## Tech Stack
- React 18 (functional components, hooks)
- Tailwind CSS 3.x
- Framer-motion for micro-animations
- No backend - all data is hard-coded JSON

## Features
- Responsive grid layout (4-column desktop, 2-column tablet, 1-column mobile)
- Interactive cards with hover effects
- Animated modal with tabs
- Search and filter functionality
- Fully keyboard accessible with proper ARIA attributes

## Local Development

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/mbti-training-guide.git
cd mbti-training-guide

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Deployment

### Deploying to Vercel
1. Push your code to a GitHub repository
2. Visit [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Use default settings (Vercel will automatically detect it's a React app)
5. Click "Deploy"

### Deploying to Replit
1. Create a new Repl and select "Import from GitHub"
2. Enter your GitHub repository URL
3. Set the run command to `npm start`
4. Click "Import from GitHub" button
5. Wait for dependencies to install
6. Your app will be available at the generated Replit URL

## Project Structure
```
src/
  ├─ App.jsx                (main layout, router-less)
  ├─ components/
  │    ├─ MbtiCard.jsx
  │    ├─ MbtiModal.jsx
  │    └─ SearchBar.jsx
  ├─ data/mbti.js           (export const mbtiData = [...])
  └─ index.css              (@tailwind base; …)
```

## License
MIT

---

Created by Jun (2025)
