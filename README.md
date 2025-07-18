# Tooltip & Testimonial UI - Next.js Project

> 🎯 **Recent Update (2025-07-18)**

- Saved `video.mp4` in the `/public/assets` directory  
- Integrated video into the respective tooltip component  
- Implemented mute icon on the video player  
- Adjusted pointer rendering for all directions (`top`, `left`, `right`, `bottom`)  

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), built to replicate and extend complex tooltip and testimonial UI components based on provided Figma designs.

---

## ✨ Features

- **Dynamic component rendering** with support for custom titles, directional arrows, and pointer positions  
- **Video integration** with mute icon and autoplay behavior  
- **Pointer support for all directions** including `top`, `left`, `right`, and `bottom`  
- Added `fadeCycle` animation using global CSS for smooth fade-in/fade-out transitions  
- Designed and implemented all components as shown in provided reference images  
- Supports PNG, GIF, and MP4 assets from `public/assets` and `public/gif` folders  
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
