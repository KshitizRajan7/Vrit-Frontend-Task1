# Tooltip & Testimonial UI - Next.js Project

> 🎯 **Recent Update (2025-07-19)**  
- Created `floatUpDown` keyframe animation in global CSS for floating image effect  
- Implemented hover translation to move testimonial images outside the `TestimonialMiddle` component  
- Enhanced image motion and interactivity on hover for a dynamic user experience  

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), built to replicate and extend complex tooltip and testimonial UI components based on provided Figma designs.

---

## ✨ Features

- **Dynamic tooltip & testimonial components** with customizable titles, directional arrows, and pointer positions  
- **Video integration** with mute icon, autoplay, loop, and hover interactions  
- **Directional pointer support** (`top`, `left`, `right`, `bottom`) rendered with pixel-perfect accuracy  
- **Hover-based animations** using `floatUpDown` keyframes for smooth vertical image floating  
- **Image translation on hover** in `TestimonialMiddle` to shift visuals outside the component dynamically  
- `fadeCycle` animation using global CSS for fade-in/fade-out transitions  
- Clean and modular React component structure with prop-based logic  
- Responsive and visually aligned layout matching design specifications  
- Support for image, GIF, and video assets from `public/assets` and `public/gif`  
- Refactored `TextComponent` includes nested layout, title, description, and a call-to-action arrow button  

---

## 🚀 Getting Started

To run the project locally:

```bash
npm install
npm run dev
