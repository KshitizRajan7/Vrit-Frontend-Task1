> 🎯 **Recent Update (2025-07-17)**

- Implemented **dynamic arrow rendering** based on direction (`Left`) and pointer position (`First`, `Middle`, `Last`)
- Updated `TextHover` to **conditionally render layout blocks** based on props
- Improved **spacing and positioning logic** for tooltip arrows
- Cleaned and structured component logic for better scalability

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), built to replicate and extend complex tooltip and testimonial UI components based on provided Figma designs.

---

## ✨ Features

- **Dynamic component rendering** with support for custom titles, directional arrows, and pointer positions
- Added `fadeCycle` animation using global CSS for smooth fade-in/fade-out transitions
- Designed and implemented all components as shown in provided reference images
- Supports PNG and GIF assets from `public/assets` and `public/gif` folders
- Responsive layout and proper alignment for all components
- Refactored `TextComponent` to include nested `FrameComponent` and an action button with an arrow icon
- Modular and maintainable component structure using prop-based logic
- Verified and optimized all asset paths for use across components

---

## 🚀 Getting Started

To run the project locally:

```bash
npm install
npm run dev
