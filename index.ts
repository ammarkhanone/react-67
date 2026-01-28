```bash
# Step 1: Create a new React application with TypeScript support
npx create-react-app react-67 --template typescript

# Step 2: Navigate into the project directory
cd react-67

# Step 3: Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 4: Configure Tailwind to remove unused styles in production
# Open tailwind.config.js and update the content array
```
```javascript
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
```css
/* Step 5: Add Tailwind to your CSS */
```
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```tsx
// Step 6: Create a simple Hello World component
// src/App.tsx
import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">Hello, World!</h1>
    </div>
  );
}

export default App;
```
```bash
# Step 7: Start the application
npm start
```

This is a simple TypeScript React application styled with Tailwind CSS that displays "Hello, World!" in the center of the screen.