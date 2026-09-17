# Color Shade Generator

[![Deploy to GitHub Pages](https://github.com/imranpollob/color-shade-generator/actions/workflows/deploy.yml/badge.svg)](https://github.com/imranpollob/color-shade-generator/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Pick a color and instantly generate 10 lighter and 10 darker shades. Built for designers and developers who need a quick, accurate palette without opening a design tool.

**Live demo:** https://imranpollob.github.io/color-shade-generator/

![screenshot](./Screenshot.jpeg)

## Features

- Generate 10 lighter and 10 darker shades from any hex color
- Visual color picker plus manual hex input
- Click any shade to copy its hex value to the clipboard
- Random color generator
- Live preview background so you can see shades in context
- Fully responsive, no build step required to try it locally

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [React 18](https://react.dev/)
- [@rc-component/color-picker](https://www.npmjs.com/package/@rc-component/color-picker)

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/imranpollob/color-shade-generator.git
   cd color-shade-generator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```sh
npm run build
```

This produces a fully static site in the `out/` directory, ready to be served from any static host, including GitHub Pages.

## Deployment

This project deploys automatically to GitHub Pages via GitHub Actions on every push to `master`. See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

Licensed under the [MIT License](LICENSE).
